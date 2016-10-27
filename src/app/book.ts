export class Book {
	constructor(
		public title: String = "",
		public author = "",
		public year: String = undefined,
		public pages: Number = undefined)
	{
		
	}

	_id?: String;
}