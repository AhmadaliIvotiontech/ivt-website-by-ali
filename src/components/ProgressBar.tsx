interface ProgressBarProps {
  skill: string
  percentage: number
}

const ProgressBar = ({ skill, percentage }: ProgressBarProps) => {
  return (
    <div className="progress">
      <span className="skill">
        <span>{skill}</span> <i className="val">{percentage}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    </div>
  )
}

export default ProgressBar
