import React from "react";
import { contactInfo,contactLinks,contactMessage } from "../constants/DisplayTexts";
import { OuterLayout } from "../styles/constantLayout";
import {OuterDiv,SectionContact,Heading,Disc,Section,Label,DisplayLinks,Message,Mail,ContactDisc,LeftSection} from "../styles/footerContactStyle"


const FooterContact = () => {
    return (
        <OuterLayout>
            <OuterDiv>
            <LeftSection>
            <Section>
            <SectionContact>
                <Heading>
                    Contact Info
                </Heading>
                <Disc>
                    {contactInfo.map((i,index)=>{
                        return (
                            <ContactDisc key={index}>
                                <Label>
                                    {i[0]}
                                </Label>
                                <Disc>
                                    {i[1]}
                                </Disc>
                            </ContactDisc>
                        );
                    })}
                </Disc>
            </SectionContact>
            </Section>
            <Section>
                <Heading>
                    My Account
                </Heading>
                <Disc>
                    
                    {contactLinks[0].map((i,index)=>
                        <DisplayLinks key={index}>{i}</DisplayLinks>
                    )}
                </Disc>
            </Section>
            <Section>
                <Heading>
                    Contact Info
                </Heading>
                <Disc>
                    {contactLinks[1].map((i,index)=>
                        <DisplayLinks key={index}>{i}</DisplayLinks>
                    )}
                </Disc>
            </Section>
            </LeftSection>
            <Message>
                <Disc>
                    {contactMessage}
                </Disc>
                <Mail>
                    Riode@example.com
                </Mail>
            </Message>
        </OuterDiv>
        </OuterLayout>
    );
}

export default FooterContact;