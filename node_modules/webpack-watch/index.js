const watch = require('watch');

class WatchPlugin {

    constructor(options) {
        this.options = options;
        this.compiler = null;
        this.monitor = null;
    }

    apply(compiler) {
        this.compiler = compiler;

        if (!this.monitor) {
            this.startMonitor();
        }
    }

    startMonitor() {
        watch.createMonitor(this.options.path, monitor => {
            this.monitor = monitor;

            monitor.on('created', () => {
                this.runCompiler();
            });

            monitor.on('changed', () => {
                this.runCompiler();
            });

            monitor.on('removed', () => {
                this.runCompiler();
            });
        });
    }

    stopMonitor() {
        this.monitor.stop();
    }

    runCompiler() {
        this.compiler.run(error => {
            if (error) {
                this.stopMonitor();
                throw error;
            }
        });
    }
}

module.exports = WatchPlugin;
