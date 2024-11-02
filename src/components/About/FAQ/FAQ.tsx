import * as Accordion from '@radix-ui/react-accordion';
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      ref={forwardedRef}
      id={props.id}
      aria-expanded={props['aria-expanded']}
      onClick={props.onClick}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    ref={forwardedRef}
    id={props.id}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

export default function FAQ() {
  return (
    <div className="faq-section info">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-accordion">
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>When is Stride?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Who can attend Stride?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s unstyled by default, giving you freedom over the
              look and feel.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item
            aria-label="accordion"
            className="AccordionItem"
            value="item-3"
          >
            <AccordionTrigger>How should I dress for Stride?</AccordionTrigger>
            <AccordionContent>
              <div className="AccordionContentText">
                Yes! You can animate the Accordion with CSS or JavaScript.
              </div>
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item
            aria-label="accordion"
            className="AccordionItem"
            value="item-4"
          >
            <AccordionTrigger>How can I prepare for Stride?</AccordionTrigger>
            <AccordionContent>
              <div className="AccordionContentText">
                Yes! You can animate the Accordion with CSS or JavaScript.
              </div>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
      <svg
        width="100%"
        height="21"
        viewBox="0 0 320 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-53.0713 9.20718L-48.4038 11.5409L-44.6698 9.20718L-39.0688 11.5409L-32.5343 5.93993L-22.7325 13.4079L-17.1316 15.2749H-11.9973L-3.59579 19.9424L4.80571 18.0754H12.2737L16.4744 15.2749L21.6087 13.4079H30.9437L39.3452 16.6751L44.9462 18.0754H52.8809L58.4819 15.2749H69.2172L79.9524 10.1406H85.5534L88.8207 6.40666H110.758L114.959 7.8069H119.626L121.96 10.1406H125.694H129.428L132.695 12.0077H136.896L143.43 10.1406L146.698 7.8069H151.365L157.433 4.07292H165.368H173.769L179.37 2.2059H184.971L189.639 4.07292L194.773 6.40666H199.44L206.442 4.07292H212.043L216.243 2.2059H221.844L227.912 4.07292H234.447L240.514 6.40666H245.649H256.851L263.852 4.07292H267.586L273.187 5.00642H277.854L283.922 7.8069H290.923H296.991L301.192 4.07292H305.393L309.127 5.00642L314.728 4.07292H318.462H322.662L326.863 6.40666L332.464 7.8069L337.598 9.20718H342.266L346 5.00642L349.267 0.805664H353.001L356.735 2.2059H360.469L363.736 4.07292H373.071"
          stroke="#FBFEFC"
          strokeWidth="0.575091"
        />
      </svg>
    </div>
  );
}
