import FilterChip from './Chip';

type FilterChipsProps = {
  filters: string[],
  activeFilter: string,
  setActiveFilter: (name: string) => void,
};

const FilterChips = ({ filters, setActiveFilter, activeFilter }: FilterChipsProps) => {
  const handleChipClick = (name: string) => {
    setActiveFilter(name);
  };

  return (
    <div className="filter-chips">
      {filters.map((chip, index) => (
        <FilterChip key={index} chip={chip} onChipClick={handleChipClick} activeFilter={activeFilter}/>
      ))}
    </div>
  );
};

export default FilterChips;
