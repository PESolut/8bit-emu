class Speaker {
    constructor() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        this.audioCtx = new AudioContext();

        // create a gain which will allow us to control the volume
        this.gain = this.audioCtx.createGain();
        this.finish = this.audioCtx.destination;

        // connect the gain to the audioCtx
        this.gain.connect(this.finish)
    }

    play(frequency) {
        if (this.audioCtx && !this.oscillator) {
            this.oscillator = this.audioCtx.createOscillator();
    
            // set the frequency
            this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime);
    
            // square wave
            this.oscillator.type = 'square';
    
            // connect the gain and start the sound
            this.oscillator.connect(this.gain);
            this.oscillator.start();
        }
    }
}