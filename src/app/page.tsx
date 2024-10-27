import React, { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles/styles.scss';

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

export default function Home() {
  return (
    <main>
      <h1>Stride 2024</h1>
      <div className="about-page-container">
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

            <Accordion.Item className="AccordionItem" value="item-3">
              <AccordionTrigger>
                How should I dress for Stride?
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContentText">
                  Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-4">
              <AccordionTrigger>How can I prepare for Stride?</AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContentText">
                  Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-5">
              <AccordionTrigger>Do I need a portfolio?</AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContentText">
                  Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-6">
              <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContentText">
                  Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </main>
  );
}
