
type FilterChipProps = {
    chip: string,
    activeFilter: string,
    onChipClick: (name: string) => void
}


  const Chip = ({ chip, onChipClick, activeFilter }: FilterChipProps) => {
  
    return (
      <div
        className={`filter-chip ${activeFilter === chip ? "active" : ""}`}
        onClick={() => onChipClick(chip)}
      >
        {chip}
      </div>
    );
  };


  

  

export default Chip;
