export interface IAvatars {
	id: number;
	url: string;
}

export interface IAvatarsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	images: Array<IAvatars>;
    savedImage: IAvatars;
}
