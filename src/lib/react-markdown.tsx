import * as React from "react";

export interface ReactMarkdownProps {
  children: string;
  remarkPlugins?: unknown[];
  components?: Record<string, React.ComponentType<any>>;
}

const ReactMarkdown: React.FC<ReactMarkdownProps> = ({
  children,
  components,
}) => {
  // Simple markdown parser for basic rendering
  const renderMarkdown = (text: string) => {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return renderMarkdown(children);
};

export default ReactMarkdown;
