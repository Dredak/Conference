import React from 'react';
import * as BoxWrapperStyle from './BoxWrapperStyle';



const { BoxWrapperDiv, MapOutterWrapper, FormOutterWrapper, Form, TextInput,
    SingleItemWrapper, TextArea, Button } = BoxWrapperStyle

const BoxWrapper = () => {
    return (
        <>
            <BoxWrapperDiv>
                <MapOutterWrapper>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22646.207898730074!2d20.44489128352727!3d44.805753755833315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa746339377%3A0xf14fac8212c59d72!2sInstitute+of+Chemistry%2C+Technology+and+Metallurgy!5e0!3m2!1sen!2srs!4v1559746479892!5m2!1sen!2srs"
                        width="540" height="558" frameborder="0" allowfullscreen />
                </MapOutterWrapper>
                <FormOutterWrapper>
                    <Form>
                        <SingleItemWrapper>
                            <TextInput placeholder="Your Name" />
                        </SingleItemWrapper>
                        <SingleItemWrapper>
                            <TextInput placeholder="Your Email" />
                        </SingleItemWrapper>
                        <SingleItemWrapper>
                            <TextInput placeholder="Subject" />
                        </SingleItemWrapper>
                        <SingleItemWrapper >
                            <TextArea placeholder="Message"></TextArea>
                        </SingleItemWrapper>
                        <SingleItemWrapper>
                            <Button >
                                Send Message
                            </Button>
                        </SingleItemWrapper>
                    </Form>
                </FormOutterWrapper>
            </BoxWrapperDiv>
        </>
    )
}

export default BoxWrapper; 