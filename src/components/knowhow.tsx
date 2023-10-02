import { useState, useEffect } from "react";
import { BoxTitle, BoxSkill } from "../components/boxs";
import { Title, Subtitle } from "./titles";
import { Profile, Slider, Card, Tag } from "./items";
import { RocketLaunch } from "@phosphor-icons/react";
import { skill, tag } from "../providers";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function KnowHow() {

    const totalCards = skill.length;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsToShow, setCardsToShow] = useState(4);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalCards - cardsToShow + 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const updateCardsToShow = () => {
        const screenSize = window.getComputedStyle(document.documentElement).getPropertyValue('--tailwind-screen').trim();

        switch (screenSize) {
            case 'mobile':
                setCardsToShow(1);
                break;
            case 'tablet':
                setCardsToShow(1);
                break;
            case 'laptop':
                setCardsToShow(3);
                break;
            default:
                setCardsToShow(4);
        }
    };

    const startIndex = currentPage - 1;
    const endIndex = Math.min(startIndex + cardsToShow, totalCards);
    const slicedSkills = skill.slice(startIndex, endIndex);

    useEffect(() => {
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);

        return () => {
            window.removeEventListener("resize", updateCardsToShow);
        };
    }, []);

    const mobile = 'w-full h-full py-24 flex flex-col items-start justify-start';
    const tablet = 'tablet:py-32';
    const laptop = 'laptop:w-[90%] laptop:px-6 laptop:py-16 laptop:gap-4';
    const notebook = 'notebook:py-20 notebook:px-8 notebook:gap-5';
    const desktop = 'desktop:py-24 desktop:px-10 desktop:gap-6';
    const monitor = 'monitor:py-28 monitor:px-12 monitor:gap-7';
    const tv = 'tv:py-32 tv:px-6 tv:gap-14';
    const scale = 'scale:py-36 scale:px-16 scale:gap-9';
    const screen = 'screen:py-40 screen:px-18 screen:gap-10';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <BoxTitle>
                <Title>
                    <Title.Label>Hard Skill's</Title.Label>
                    <Title.Description>Habilidades técnicas específicas e mensuráveis para desempenho profissional.</Title.Description>
                </Title>
                <Profile href="/about">
                    <Profile.Info>
                        <Profile.Name>Full-Stack Developer</Profile.Name>
                        <Profile.Level>
                            <RocketLaunch size={20} weight="fill" color="#7E22CE" />
                            <Profile.Atual>1440</Profile.Atual>
                            <Profile.Divider>/</Profile.Divider>
                            <Profile.Total>2000</Profile.Total>
                        </Profile.Level>
                        <Profile.Bar>
                            <Profile.Progress />
                        </Profile.Bar>
                    </Profile.Info>
                    <Profile.Avatar>
                        <Profile.Person>
                            <Profile.Image />
                        </Profile.Person>
                    </Profile.Avatar>
                </Profile>
            </BoxTitle>
            <BoxSkill>
                <BoxSkill.Hard>
                    <Slider>
                        <Slider.Wrapper>
                            <Slider.Arrow onClick={handlePrevPage}>
                                <CaretLeft weight="fill" />
                            </Slider.Arrow>
                            <Slider.Content>
                                {slicedSkills.map((skill, index) => (
                                    <Card key={index} href={skill.href}>
                                        <Card.Top>
                                            <Card.Title>{skill.title}
                                                <Card.Level>
                                                    <Card.Percentage>{skill.percentage}</Card.Percentage>
                                                    <Card.Divider>||</Card.Divider>
                                                    <Card.Xp>{skill.xp}</Card.Xp>
                                                </Card.Level>
                                            </Card.Title>
                                            <Card.Icon bg={skill.icon} />
                                        </Card.Top>
                                        <Card.Description>{skill.description}</Card.Description>
                                    </Card>
                                ))}
                            </Slider.Content>
                            <Slider.Arrow onClick={handleNextPage}>
                                <CaretRight weight="fill" />
                            </Slider.Arrow>
                        </Slider.Wrapper>
                        <Slider.Navbar>
                            {Array.from({ length: totalCards + 1 - cardsToShow }, (_, index) => (
                                <Slider.Pagelocation key={index} isActive={index + 1 === currentPage} />
                            ))}
                        </Slider.Navbar>
                    </Slider>
                </BoxSkill.Hard>
                <BoxSkill.Soft>
                    <Subtitle>
                        <Subtitle.Label>Soft Skill's</Subtitle.Label>
                        <Subtitle.Description>
                            Habilidades pessoais e comportamentais.
                        </Subtitle.Description>
                    </Subtitle>
                    <BoxSkill.Tag>
                        {tag.map((tag, index) => (
                            <Tag key={index}>
                                <Tag.Wrapper>
                                    <Tag.Img bg={tag.icon} />
                                    <Tag.Name>
                                        {tag.title}
                                    </Tag.Name>
                                </Tag.Wrapper>
                                <Tag.Description>
                                    {tag.description}
                                </Tag.Description>
                            </Tag>
                        ))}
                    </BoxSkill.Tag>
                </BoxSkill.Soft>
            </BoxSkill>
        </div>
    );
};