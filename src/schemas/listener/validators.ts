export interface IRDogeState {
	TYPE: string;
	MARKET: string;
	FROMSYMBOL: string;
	TOSYMBOL: string;
	FLAGS: number;
	PRICE?: number;
	LASTUPDATE?: number;
	MEDIAN?: number;
	LASTVOLUME?: number;
	LASTVOLUMETO?: number;
	LASTTRADEID?: string;
	VOLUMEDAY: number;
	VOLUMEDAYTO: number;
	VOLUME24HOUR: number;
	VOLUME24HOURTO: number;
	VOLUMEHOUR: number;
	VOLUMEHOURTO: number;
	OPENDAY?: number;
	HIGHDAY?: number;
	LOWDAY?: number;
	TOPTIERVOLUME24HOUR: number;
	TOPTIERVOLUME24HOURTO: number;
}
