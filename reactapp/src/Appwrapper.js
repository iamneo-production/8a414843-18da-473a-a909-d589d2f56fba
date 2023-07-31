import React from "react";
import { MantineProvider } from "@mantine/core";




const AppWrapper = ({ children }) => (
    <>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    globalStyles: (theme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                        },
                        body: {
                            ...theme.fn.fontStyles(),
                            backgroundColor: theme.fn.linearGradient(
                                95,
                                theme.colors.pink[6],
                                theme.colors.violet[6]
                            ),
                            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                            lineHeight: theme.lineHeight,
                        },
                    }),
                    colorScheme: "light",
                    fontFamily: "'Poppins', 'sans-serif'",

                    // fontFamily: " Inter, Helvetica, 'sans-serif'"
                }}
            >
                {children}
            </MantineProvider>
           
        
    </>
);
export default AppWrapper;