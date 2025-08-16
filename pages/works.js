import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import monai from "../public/images/monai.png";
import pantry from "../public/images/pantry.png";
import Layout from "../components/layouts/article"

const Works = () => {
    return (
        <Layout>
        <>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id="AI-campus-assistant" title="AI Campus Assistant" >
                        GPT-powered assistant for George Mason University using voice/text and RAG search with Pinecone. Built guardrails for safe conversations and created evaluation benchmarks.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="insurance-claims" title="Automate Insurance Claims" >
                        Built an AI pipeline using Gemini + OCR to auto-fill 50-page medical forms across 10+ insurers, reducing manual work by 70% with 95%+ field accuracy.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="video-chat" title="Multimedia Video Analysis Chat" >
                        Gemini-based tool that chats with YouTube videos using transcript/frame parsing and vector retrieval with LangChain and custom RAG.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="learning-path" title="Learning Path Generator" >
                        LangGraph ReAct agent pipeline that generates personalized 5-day learning paths by parsing user goals and scraping YouTube/Drive resources.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="AI-chatbot" title="Mon-AI" thumbnail={monai}>
                        An AI-powered chatbot using GPT-4.0 mini for technical and theoretical interview preparation.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Pantry-Tracker" title="Pantry" thumbnail={pantry}>
                    A full-stack pantry management system with Next.js, Material UI, and Firebase for inventory tracking.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </>
        </Layout>
    )
}

export default Works