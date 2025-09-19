export class SaveData{ 
	gunList = []
	#id = 0
	get newId() {
		return ++this.#id
	}
	get lastId(){
		return this.#id
	}
}