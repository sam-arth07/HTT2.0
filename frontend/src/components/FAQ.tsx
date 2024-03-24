import React from "react";
import FAQData from '../data/FAQ.json';
import {
	Accordion,
	AccordionContent,
	AccordionPanel,
	AccordionTitle,
} from "flowbite-react";

export default function FAQ() {
	return (
		<Accordion collapseAll>
            {FAQData.map((faq, index) => (
                <AccordionPanel key={index}>
                    <AccordionTitle>{faq.question}</AccordionTitle>
                    <AccordionContent>
                        <p>{faq.answer}</p>
                    </AccordionContent>
                </AccordionPanel>
            ))}
		</Accordion>
	);
}
