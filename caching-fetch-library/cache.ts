type CacheType = Map<string, Array<Record<string, unknown>>>;

let cache: CacheType | undefined;

const getCache = (): CacheType => {
	if (!cache) {
		cache = new Map();
	}
	return cache;
};

const setCache = (data: Record<string, Array<Record<string, unknown>>>) => {
	cache = new Map(Object.entries(data));
};

export { getCache, setCache };
