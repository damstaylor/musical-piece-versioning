import MusicalPiece from './MusicalPiece';

const MAX_NB_VERSIONS = 5;

export default class MusicalPieceVersioning {
    _history: MusicalPiece[];
    _currentVersion: MusicalPiece | null;

    constructor(value = []) {
        const newValue = Array.isArray(value) && value.length > MAX_NB_VERSIONS ? value.slice(0, MAX_NB_VERSIONS) : value.slice();
        this._history = newValue;
        this._currentVersion = this._history.length > 0 ? this._history[0] : null;
    }

    get history(): MusicalPiece[] {
        return this._history;
    }

    get currentVersion(): MusicalPiece | null {
        return this._currentVersion;
    }

    get currentVersionNb(): number {
        if (!this.currentVersion) {
            return -1;
        }
        return this._history.indexOf(this.currentVersion) + 1;
    }

    get mostRecentVersion(): MusicalPiece | null {
        return this._history.length > 0 ? this._history[this._history.length - 1] : null;
    }

    save(params: object = {}): MusicalPiece | null {
        if (this._history.length === MAX_NB_VERSIONS) {
            console.error('History is full!');
        } else {
            let newVersion: MusicalPiece;
            if (this.mostRecentVersion === null) {
                newVersion = new MusicalPiece(params);
            } else {
                newVersion = this.mostRecentVersion.clone(params);
            }
            newVersion.modificationDate = new Date(); /* Update modification date on save */
            this._history.push(newVersion);
            this._currentVersion = this.mostRecentVersion;
        }
        return this._currentVersion;
    }

    restore(value: number): MusicalPiece | null {
        if (value < 0 || value >= MAX_NB_VERSIONS) {
            throw new Error('Wrong number format: please give a positive version number lower than ' + MAX_NB_VERSIONS);
        }
        this._currentVersion = this._history[value];
        return this._currentVersion;
    }

    delete(value: number): MusicalPiece {
        if (value < 0 || value >= MAX_NB_VERSIONS) {
            throw new Error('Wrong number format: please give a positive version number lower than ' + MAX_NB_VERSIONS);
        }
        const deleted = this._history.splice(value, 1);
        if (this.currentVersionNb === value) {
            this._currentVersion = this.mostRecentVersion;
        }
        return deleted[0];
    }

    print(): void {
        if (this.currentVersion) {
            let str = `[Version ${this.currentVersionNb}/${this._history.length}] ${this.currentVersion.getMainInfo()}`;
            if (this._history.length === MAX_NB_VERSIONS) {
                str += '\n- Warning: history is now full.'
            }
            console.log(str);
        } else {
            console.log('Versioning history is empty.');
        }
    }
}
