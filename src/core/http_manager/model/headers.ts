export interface IHeaders {
    contentType: string;
    date: Date;
    os: string;
}

export class CHeaders implements IHeaders {
    private _contentType!: string;
    private _date!: Date;
    private _os!: string;

    constructor(value: any) {
        const { os = '' } = { ...value };
        this.contentType = 'application/json';
        this.date = new Date();
        this.os = os;
    }
    get item(): any {
        const { contentType, date, os } = this;
        return {
            'Content-Type': contentType,
            date,
            'x-os': os,
            Authorization: null,
        };
    }
    set contentType(value: string) {
        this._contentType = value;
    }
    get contentType(): string {
        return this._contentType;
    }

    set date(value: Date) {
        this._date = value;
    }
    get date(): Date {
        return this._date;
    }

    set os(value: string) {
        this._os = value;
    }
    get os(): string {
        return this._os;
    }
}
