import React from 'react';
import "./ResumeTemplate.css";
import { connect } from 'react-redux';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Pdf from "react-to-pdf";

const ref = React.createRef();

function ResumeTemplate(details) {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const home = <FontAwesomeIcon icon={faHome} />
    const pdf = <FontAwesomeIcon icon={faFilePdf} />
    return (
        <div className="pdf-button-container">
            {details.id ==="view" && 
            <Pdf targetRef={ref} filename="resume.pdf">
                {({ toPdf }) =><i onClick={toPdf} aria-hidden="true">{pdf}</i>}
            </Pdf>}
            <div ref={ref} className='resume-template-main-container'>

                <div className='details-container'>
                    <h1>{details.state.userName}</h1>
                    {details.state.userAddress && <h4>{home} {details.state.userAddress}</h4>}
                    {details.state.userEmail && <h4>{envelope} {details.state.userEmail}</h4>}
                    {details.state.userPhoneNumber && <h4>{phone} {details.state.userPhoneNumber}</h4>}
                </div>
                <Container id="resume-container">
                    {details.state.userEducation[0].institueName &&
                        <Row>
                            <Column className='col-4 resume-topic'>OBJECTIVE</Column>
                            <Column className="resume-content">Looking for a challenging career which demands the best of my professional ability in terms of technical and analytical skills and helps me broadening and enhancing my skills and knowledge.</Column>
                        </Row>}
                    {details.state.userEducation[0].institueName &&
                        <Row>
                            <Column className='col-4 resume-topic'>EDUCATION</Column>
                            <Column className="resume-content"></Column>
                        </Row>
                    }

                    {details.state.userEducation.map((each, i) => (

                        <Row key={i}>
                            {each.institueName &&
                                <Column className='col-4 resume-sub-topic'>Pass Out: {each.passOutYear} </Column>
                            }
                            <Column>
                                <Column className="resume-content">{each.institueName}</Column>
                                <Column className="resume-content cursive">{each.degree}</Column>
                            </Column>
                        </Row>)

                    )
                    }
                    {details.state.userExperience[0].companyName &&
                        < Row >
                            <Column className='col-4 resume-topic'>EXPERIENCE</Column>
                            <Column className="resume-content"></Column>
                        </Row>
                    }

                    {details.state.userExperience.map((each, i) => (
                        <Row key={i}>
                            {each.companyName &&
                                <Column className='col-4 resume-sub-topic'>Number Of Years: {each.numberOfYears}</Column>
                            }
                            <Column>
                                <Column className="resume-content">{each.companyName}</Column>
                                <Column className="resume-content cursive">{each.designation}</Column>
                            </Column>
                        </Row>)
                    )
                    }

                    <Row>
                        {details.state.userSkills[0] &&
                            <Column className='col-4 skill-caption resume-topic'>SKILLS</Column>
                        }
                        <Column className="resume-content">
                            <Row id="display-skills">
                                {details.state.userSkills.map((item, index) => (
                                    <p key={index} id="skills">{index + 1}. {item}</p>
                                ))}
                            </Row>

                        </Column>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps
)(ResumeTemplate);