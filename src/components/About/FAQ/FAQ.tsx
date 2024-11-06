import React from 'react';
import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import { FAQData } from './constants';
import './FAQ.scss';

export default function FAQ() {
  return (
    <section className="faq-section info">
      <div className="top-paper">
        <svg
          viewBox="0 0 400 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M413.071 11.7459L408.404 9.4122L404.67 11.7459L399.069 9.4122L392.534 15.0132L382.733 7.54523L377.132 5.67822H371.997L363.596 1.01072L355.194 2.8777H347.726L343.526 5.67822L338.391 7.54523H329.056L320.655 4.27798L315.054 2.8777H307.119L301.518 5.67822H290.783L280.048 10.8125H274.447L271.179 14.5465H249.242L245.041 13.1462H240.374L238.04 10.8125H234.306H230.572L227.305 8.94547H223.104L216.57 10.8125L213.302 13.1462H208.635L202.567 16.8802H194.632H186.231L180.63 18.7472H175.029L170.361 16.8802L165.227 14.5465H160.56L153.558 16.8802H147.957L143.757 18.7472H138.156L132.088 16.8802H125.553L119.486 14.5465H114.351H103.149L96.1481 16.8802H92.4142L86.8131 15.9467H82.1456L76.0779 13.1462H69.0767H63.0089L58.8081 16.8802H54.6074L50.8734 15.9467L45.2724 16.8802H41.5384H37.3377L33.1369 14.5465L27.5359 13.1462L22.4017 11.7459H17.7341L14.0002 15.9467L10.7329 20.1475H6.99892L3.2649 18.7472H-0.469087L-3.73634 16.8802H-13.0713"
            stroke="#FBFEFC"
            strokeWidth="0.575091"
          />
        </svg>
      </div>

      <h2 className="section-title">
        <span>Frequently</span>
        <span>Asked Questions</span>
      </h2>
      <div className="faq-accordion">
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {FAQData.map((item, index) => (
            <Accordion.Item
              key={item.title}
              className="AccordionItem"
              value={`item-${index + 1}`}
            >
              <Accordion.Trigger className="AccordionTrigger">
                <div>
                  <h3>{item.title}</h3>
                  <Image
                    className="down-arrow-icon"
                    src="/images/icons/down-arrow-icon.svg"
                    height={24}
                    width={24}
                    alt="Down arrow"
                    aria-hidden
                  />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="AccordionContent">
                <p>{item.content}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
      <div className="bottom-paper">
        <svg
          viewBox="0 0 400 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M413.071 11.7459L408.404 9.4122L404.67 11.7459L399.069 9.4122L392.534 15.0132L382.733 7.54523L377.132 5.67822H371.997L363.596 1.01072L355.194 2.8777H347.726L343.526 5.67822L338.391 7.54523H329.056L320.655 4.27798L315.054 2.8777H307.119L301.518 5.67822H290.783L280.048 10.8125H274.447L271.179 14.5465H249.242L245.041 13.1462H240.374L238.04 10.8125H234.306H230.572L227.305 8.94547H223.104L216.57 10.8125L213.302 13.1462H208.635L202.567 16.8802H194.632H186.231L180.63 18.7472H175.029L170.361 16.8802L165.227 14.5465H160.56L153.558 16.8802H147.957L143.757 18.7472H138.156L132.088 16.8802H125.553L119.486 14.5465H114.351H103.149L96.1481 16.8802H92.4142L86.8131 15.9467H82.1456L76.0779 13.1462H69.0767H63.0089L58.8081 16.8802H54.6074L50.8734 15.9467L45.2724 16.8802H41.5384H37.3377L33.1369 14.5465L27.5359 13.1462L22.4017 11.7459H17.7341L14.0002 15.9467L10.7329 20.1475H6.99892L3.2649 18.7472H-0.469087L-3.73634 16.8802H-13.0713"
            stroke="#FBFEFC"
            strokeWidth="0.575091"
          />
        </svg>
      </div>
    </section>
  );
}
