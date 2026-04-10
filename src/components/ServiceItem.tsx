interface ServiceItemProps {
  icon: string
  title: string
  delay?: number
}

const ServiceItem = ({ icon, title, delay = 0 }: ServiceItemProps) => {
  return (
    <div className="col-xl-3 col-md-6 d-flex mt-0 justify-content-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="service-item-main">
        <div className="service-item position-relative">
          <div className="icon">
            {/* <i className={`bi ${icon} icon`}></i> */}
            <img src={icon} className={`bi ${icon} icon`} />
          </div>
          <h4>
            <a className="stretched-link">
              {title}
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
