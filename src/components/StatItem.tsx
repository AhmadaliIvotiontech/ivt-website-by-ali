interface StatItemProps {
  icon: string
  number: number
  label: string
}

const StatItem = ({ icon, number, label }: StatItemProps) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
      <i className={`bi ${icon}`}></i>
      <div className="stats-item">
        <span className="purecounter" data-purecounter-start="0" data-purecounter-end={number} data-purecounter-duration="1">
          {number}
        </span>
        <p>{label}</p>
      </div>
    </div>
  )
}

export default StatItem
