import {
    Button,
    CloseButton,
    Flex,
    Group,
    Modal,
    Text,
    Title,
} from "@mantine/core";
import React, { memo, useEffect, useState } from "react";

export default function Logout() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);
    return (
        <Modal
            opened={open}
            onClose={() => setOpen(false)}
            withCloseButton={false}
            centered
        >
            <CloseButton
                size={"md"}
                style={{
                    position: "absolute",
                    right: "10px",
                }}
                onClick={() => setOpen(false)}
            />
            <Flex
                direction={"column"}
                gap={"40px"}
                justify="center"
                align="center"
                my={30}
                mx="md"
            >
                <p style={{ fontSize: "18px" }}>Are sure want to Logout</p>
                <Flex gap={"40px"}>
                    <Button
                        size={"md"}
                        px={"45px"}
                        color={"dark.8"}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        size={"md"}
                        px={"45px"}
                        color={"dark.1"}
                        sx={{ background: "#D9D9D9", color: "black" }}
                        onClick={() => setOpen(false)}
                    >
                        No
                    </Button>
                </Flex>
            </Flex>
        </Modal>
    );
}
