import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import type {TimelineItem} from "../model/TimeLineItem.ts";


interface Props {
  items: TimelineItem[];
  layout?: '1-column' | '2-columns' | '1-column-left' | '1-column-right';
}

export const Timeline = ({ items, layout = '2-columns' }: Props) => {
  return (
    <VerticalTimeline layout={layout}>
        <>
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.type || 'custom'} dark:bg-[rgb(var(--bg))]`}
          date={item.date}
          iconStyle={{
            background: item.bgColor || 'rgb(var(--primary))',
            color: item.iconColor || '#fff',
          }}
          contentStyle={{
            background: 'rgb(var(--primary) / 0.05)',
            color: 'rgb(var(--text))',
            boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            borderRadius: '0.5rem',
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgb(var(--primary))',
          }}
          icon={item.icon}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-lg text-[rgb(var(--text))]">
              {item.title}
            </h3>
              <>
            {item.subtitle && (
              <h4 className="vertical-timeline-element-subtitle text-sm text-[rgb(var(--text)/0.7)]">
                {item.subtitle}
              </h4>
            )}
              </>
            <div className="text-sm text-[rgb(var(--text))]">{item.description}</div>
          </motion.div>
        </VerticalTimelineElement>
      ))}
        </>
    </VerticalTimeline>
  );
};
