import FilterChip from './Chip'; // Import FilterChip

type FilterChipsProps = {
  filters: {
    name: string;
    active: boolean;
  }[];
};

const FilterChips = ({ filters }: FilterChipsProps) => {
  return (
    <div className="filter-chips">
      {filters.map((filter, index) => (
        <FilterChip key={index} filter={filter} />
      ))}
    </div>
  );
};

export default FilterChips;
