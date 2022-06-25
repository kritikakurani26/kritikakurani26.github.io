import * as React from "react"
import PropTypes from "prop-types"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork, MdMenuBook } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import Text from "./text"
import * as styles from "../styles/timeline.module.scss"

const ElementType = {
  WORK: "work",
  EDU: "edu",
  END: "end",
}

const ElementColors = {
  WORK: "#2196F3",
  EDU: "#E91E63",
  END: "#52D140",
}

const Element = ({ title, subtitle, date, type }) => {
  let [icon, color] = [<AiFillStar />, ElementColors.END]
  switch (type) {
    case ElementType.WORK:
      icon = <MdWork />
      color = ElementColors.WORK
      break
    case ElementType.EDU:
      icon = <MdMenuBook />
      color = ElementColors.EDU
      break
    default:
      break
  }

  return (
    <VerticalTimelineElement
      className={styles.element}
      contentStyle={{
        backgroundColor: color,
        color: "white",
        marginTop: "0px",
        padding: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid" + color }}
      date={date}
      dateClassName={styles.date}
      textClassName={styles.text}
      iconStyle={{ background: color, color: "white" }}
      icon={icon}
    >
      <Text>{title}</Text>
      <Text size="small">{subtitle}</Text>
    </VerticalTimelineElement>
  )
}

Element.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  type: ElementType,
}

const Timeline = () => {
  return (
    <VerticalTimeline className={styles.timeline}>
      <Element
        title="Software Engineer"
        subtitle="Meta Platforms Inc."
        date="2018 - Present"
        type={ElementType.WORK}
      />
      <Element
        title="Masters in Computer Science"
        subtitle="Texas A&M University"
        date="2016 - 2018"
        type={ElementType.EDU}
      />
      <Element
        title="Software Engineer"
        subtitle="Microsoft India Pvt. Ltd."
        date="2014-2016"
        type={ElementType.WORK}
      />
      <Element
        title="B.Tech in Computer Science"
        subtitle="NIT Rourkela"
        date="2010 - 2014"
        type={ElementType.EDU}
      />
      <VerticalTimelineElement
        iconStyle={{ background: ElementColors.END, color: "white" }}
        icon={<AiFillStar />}
      />
    </VerticalTimeline>
  )
}

export default Timeline
