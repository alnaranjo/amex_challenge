type CacheType = Map<string, Array<Record<string, unknown>>>;

let cache: CacheType | undefined;

const getCache = (): CacheType => {
	if (!cache) {
		cache = new Map();
	}
	return cache;
};

export { getCache };
