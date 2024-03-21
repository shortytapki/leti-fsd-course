interface PersistentController {
	get: (key: string) => string | null;
	add: <T>(key: string, value: T) => void;
	remove: (key: string) => void;
	update: <T>(key: string, value: T) => void;
}

class LocalStorageController implements PersistentController {
	add<T>(key: string, value: T) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	remove(key: string) {
		localStorage.removeItem(key);
	}

	update<T>(key: string, value: T) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	get(key: string) {
		return localStorage.getItem(key);
	}
}

export const lsController = new LocalStorageController();