// Lullaby Music Player with Web Audio API chime synthesizer fallback
// This ensures that music works immediately without relying on external CDNs or missing files.

class LullabySynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.noteIndex = 0;
    // Classic soothing lullaby melody notes (frequencies in Hz)
    this.melody = [
      { note: 261.63, dur: 0.8 }, // C4
      { note: 261.63, dur: 0.8 }, // C4
      { note: 392.00, dur: 0.8 }, // G4
      { note: 392.00, dur: 0.8 }, // G4
      { note: 440.00, dur: 0.8 }, // A4
      { note: 440.00, dur: 0.8 }, // A4
      { note: 392.00, dur: 1.6 }, // G4
      { note: 349.23, dur: 0.8 }, // F4
      { note: 349.23, dur: 0.8 }, // F4
      { note: 329.63, dur: 0.8 }, // E4
      { note: 329.63, dur: 0.8 }, // E4
      { note: 293.66, dur: 0.8 }, // D4
      { note: 293.66, dur: 0.8 }, // D4
      { note: 261.63, dur: 1.6 }, // C4
      { note: 392.00, dur: 0.8 }, // G4
      { note: 392.00, dur: 0.8 }, // G4
      { note: 349.23, dur: 0.8 }, // F4
      { note: 349.23, dur: 0.8 }, // F4
      { note: 329.63, dur: 0.8 }, // E4
      { note: 329.63, dur: 0.8 }, // E4
      { note: 293.66, dur: 1.6 }, // D4
    ];
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq, duration) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    try {
      const now = this.ctx.currentTime;
      // Primary chime oscillator (sine)
      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(freq * 2, now);

      // Bell-like envelope: instantaneous attack, exponential decay
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.5);

      osc.connect(gainNode);
      oscHarmonic.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + duration * 1.6);
      oscHarmonic.stop(now + duration * 1.6);
    } catch (e) {
      console.warn('Synth error:', e);
    }
  }

  stepMelody() {
    if (!this.isPlaying) return;
    const current = this.melody[this.noteIndex];
    this.playChime(current.note, current.dur);
    this.noteIndex = (this.noteIndex + 1) % this.melody.length;
    this.timer = setTimeout(() => {
      this.stepMelody();
    }, current.dur * 900);
  }

  start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.stepMelody();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export const lullabySynth = new LullabySynthesizer();
