import StatItem from '../StatItem'

const StatsSection = () => {
  const stats = [
    { icon: 'bi-emoji-smile', number: 232, label: 'Happy Clients' },
    { icon: 'bi-journal-richtext', number: 521, label: 'Projects' },
    { icon: 'bi-headset', number: 1463, label: 'Hours Of Support' },
    { icon: 'bi-people', number: 15, label: 'Hard Workers' },
  ]

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <StatItem key={index} icon={stat.icon} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
