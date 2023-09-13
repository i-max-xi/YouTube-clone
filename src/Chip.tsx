
type FilterChipProps = {
    filter: {
        name: string,
        active: boolean
    }
}

const FilterChip = ({ filter }: FilterChipProps) => {
  return (
    <div className={`filter-chip ${filter.active ? 'active' : ''}`}>
      {filter.name}
    </div>
  );
};

export default FilterChip;
