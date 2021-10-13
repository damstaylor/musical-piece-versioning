import MusicalPiece from './MusicalPiece';

const MAX_NB_VERSIONS = 5;

export default class MusicalPieceVersioning {
    _history: MusicalPiece[];
    _currentVersion: MusicalPiece | null;

    constructor(value = []) {
        const newValue = Array.isArray(value) && value.length > MAX_NB_VERSIONS ? value.slice(0, MAX_NB_VERSIONS) : value.slice();
        this._history = newValue;
        this._currentVersion = this._history.length > 0 ? this._history[0] : new MusicalPiece();
    }

    get history(): MusicalPiece[] {
        return this._history;
    }

    get currentVersion(): MusicalPiece | null {
        return this._currentVersion;
    }

    get mostRecentVersion(): MusicalPiece | null {
        return this._history.length > 0 ? this._history[this._history.length - 1] : null;
    }

    save(params: object = {}) {
        if (this._history.length === MAX_NB_VERSIONS) {
            console.error('History is full!');
            return;
        }
        let newVersion: MusicalPiece;
        if (this.mostRecentVersion === null) {
            newVersion = new MusicalPiece(params);
        } else {
            newVersion = this.mostRecentVersion.clone(params);
        }
        this._history.push(newVersion);
        this._currentVersion = this.mostRecentVersion;
    }

    restore(value: number) {
        if (value < 0 || value >= MAX_NB_VERSIONS) {
            console.error('Wrong number format: please give a positive version number lower than ' + MAX_NB_VERSIONS);
            return;
        }
        this._currentVersion = this._history[value];
        return this._currentVersion;
    }

    print() {
        if (this.currentVersion) {
            console.log(this.currentVersion.getMainInfo());
        }
    }
}
