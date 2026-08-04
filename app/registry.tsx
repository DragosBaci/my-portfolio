'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/*
 * Collects the styles styled-components generates while rendering on the server and
 * injects them into the streamed HTML. Without this the exported page ships with no
 * CSS in the document, and the first paint is unstyled until the JS bundle loads and
 * styled-components re-creates the stylesheet client-side.
 *
 * Straight from the Next.js styled-components guide.
 */
export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    // Lazy initial state, so the sheet is created exactly once per render pass.
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    // On the client the sheet isn't needed - the browser already has the styles.
    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
    );
}
