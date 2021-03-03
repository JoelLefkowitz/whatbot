import fs = require('fs');
import chalk = require('chalk');


export class Reporter {
    logfile: string | null
    ctx = new chalk.Instance({ level: 1 });

    constructor(logfile: string | null) {
        this.logfile = logfile
    }

    logToFile(msg: string): void {
        fs.appendFileSync(
            this.logfile,
            "\n[".concat(new Date().toISOString(), "]: ", msg)
        );
    }

    boolean(
        summary: string,
        passed: boolean
    ): void {
        if (this.logfile) {
            this.logToFile([summary, "->", passed ? "Passed" : "Failed"].join(" "))
        }
        else {
            console.log(
                [summary, "->", passed ? this.ctx.green("Passed") : this.ctx.red("Failed")].join(" ")
            )
        }
    }

    event(
        event: string,
        summary: string,
    ): void {
        if (this.logfile) {
            this.logToFile(event.concat(":", "\n> ", summary));
        }
        else {
            console.log(
                this.ctx.blue.bold(event).concat(":", "\n> ", this.ctx.magenta.italic(summary))
            )
        }
    }
}