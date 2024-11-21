function Filter({ sort, order, filters, setSort, setOrder, setFilters ,onApplyFilters}: any) {
    return (
        <div className='flex items-center justify-center gap-2'>
            <select
                value={sort}
                aria-label="Select sort order"
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-lg p-1"
            >
                  <option value=""> Sort By</option>
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
                <option value="updated">Recently Updated</option>
            </select>
            <select
                aria-label="Select sort order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="border rounded-lg p-1"
            >
                <option value=""> Sort Order</option>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>

            <input
                type="text"
                placeholder="Filter (e.g., language:javascript)"
                value={filters}
                onChange={(e) => setFilters(e.target.value)}
                className="border rounded-lg p-1 flex-grow"
            />

            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700 text-md" onClick={onApplyFilters}>
                Apply
            </button>

        </div>
    )
}

export default Filter
