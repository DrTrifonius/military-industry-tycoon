export class SaveData{ 
	gunList = []
	#id = 0
	get id() {
		return ++this.#id
	}
	get lastId(){
		return this.#id
	}
}