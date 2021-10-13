export default class MusicalPiece {
    private _album: string | null;
    private _artist: string | null;
    private _bitRate: number | null;
    private _bpm: number | null;
    private _creationDate: Date | null;
    private _duration: number | null;
    private _extension: string | null;
    private _genre: string | null;
    private _modificationDate: Date | null;
    private _releaseDate: Date | null;
    private _samplingRate: number | null;
    private _title: string | null;
    private _trackNumber: number | null;

    constructor(params: object = {}) {
        this._album = null;
        this._artist = null;
        this._bitRate = null;
        this._bpm = null;
        this._creationDate = new Date();
        this._duration = null;
        this._extension = null;
        this._genre = null;
        this._modificationDate = new Date();
        this._releaseDate = null;
        this._samplingRate = null;
        this._title = null;
        this._trackNumber = null;
        if (params) {
            Object.assign(this, params);
        }
    }

    get album(): string | null {
        return this._album;
    }
    get artist(): string | null {
        return this._artist;
    }
    get bitRate(): number | null {
        return this._bitRate;
    }
    get bpm(): number | null {
        return this._bpm;
    }
    get creationDate(): Date | null {
        return this._creationDate;
    }
    get duration(): number | null {
        return this._duration;
    }
    get extension(): string | null {
        return this._extension;
    }
    get genre(): string | null {
        return this._genre;
    }
    get modificationDate(): Date | null {
        return this._modificationDate;
    }
    get releaseDate(): Date | null {
        return this._releaseDate;
    }
    get samplingRate(): number | null {
        return this._samplingRate;
    }
    get title(): string | null {
        return this._title;
    }
    get trackNumber(): number | null {
        return this._trackNumber;
    }

    set album(value: string | null) {
        this._album = value;
    }
    set artist(value: string | null) {
        this._artist = value;
    }
    set bitRate(value: number | null) {
        this._bitRate = value;
    }
    set bpm(value: number | null) {
        this._bpm = value;
    }
    set creationDate(value: Date | null) {
        this._creationDate = value;
    }
    set duration(value: number | null) {
        this._duration = value;
    }
    set extension(value: string | null) {
        this._extension = value;
    }
    set genre(value: string | null) {
        this._genre = value;
    }
    set modificationDate(value: Date | null) {
        this._modificationDate = value;
    }
    set releaseDate(value: Date | null) {
        this._releaseDate = value;
    }
    set samplingRate(value: number | null) {
        this._samplingRate = value;
    }
    set title(value: string | null) {
        this._title = value;
    }
    set trackNumber(value: number | null) {
        this._trackNumber = value;
    }

    clone(params = {}) {
        const copiedLiteral = params ? { ...this, ...params } : { ...this };
        return new MusicalPiece(copiedLiteral);
    }

    printMainInfo() {
        console.log(`${this.artist || '<Unknown artist>'} - ${this.title || '<Unknown title>'} - ${this.album || '<Unknown album>'} (${this.releaseDate ? this.releaseDate.getFullYear() : '<Unknown year>'})`);
    }
}
