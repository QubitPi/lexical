"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[9641],{9546:(e,o,t)=>{t.r(o),t.d(o,{default:()=>c});var n=t(2784),d=t(9741);function r(e){let{children:o,fallback:t}=e;return(0,d.Z)()?n.createElement(n.Fragment,null,o?.()):t??null}var i=t(7614),a=t(7663);const s=JSON.parse('{"0":"getLatest() on clone node","1":"TODO","2":"Node %s and selection point do not match.","3":"createOffsetModel: could not find node by key","4":"Expected node %s to have closest block element node.","5":"createNodeFromParse: type \\"%s\\" + not found","6":"Incorrect node type received in importJSON for %s","7":"LexicalAutoLinkPlugin: AutoLinkNode, TableCellNode or TableRowNode not registered on editor","8":"LexicalComposerContext.useLexicalComposerContext: cannot find a LexicalComposerContext","9":"Unexpected parent context null on a nested composer","10":"TablePlugin: TableNode, TableCellNode or TableRowNode not registered on editor","11":"Expected grid selection","12":"Expected table cell","13":"Cannot use method in read-only mode.","14":"One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.","15":"Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().","16":"Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().","17":"parseEditorState: type \\"%s\\" + not found","18":"LexicalNode: Node %s does not implement .importJSON().","19":"updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn\'t moved to another node. Ensure selection changes after removing/replacing a selected node.","20":"Point.getNode: node not found","21":"getNodes: expected to find AnchorNode","22":"getNodes: expected to find FocusNode","23":"getNodes: expected to find GridNode","24":"getNodes: expected to find GridRowNode","25":"getNodes: expected to find GridCellNode","26":"insertText: first node is not a text node","27":"insertNode: topLevelElement is root node","28":"insertNodes: cannot insert a non-element into a root node","29":"insertNodes: cloned parent clone is not an element","30":"registeredNode: Type %s not found","31":"Node is not a child of its parent","32":"$setSelection called on frozen selection object. Ensure selection is cloned before passing in.","33":"Type %s not in registeredNodes","34":"Reconciliation: could not find DOM element for node key \\"${key}\\"","35":"Listener for type \\"command\\" requires a \\"priority\\".","36":"registerCommand: Command %s not found in command map","37":"Node %s has not been registered. Ensure node has been passed to createEditor.","38":"setEditorState: the editor state is empty. Ensure the editor state\'s root node never becomes empty.","39":"insertAfter: list node is not parent of list item node","40":"A ListItemNode must have a ListNode for a parent.","41":"Expected Grid Cell in Grid Selection","42":"$mergeGridNodesStrategy: Expected Grid insertion.","43":"$mergeGridNodesStrategy: Expected selection to be inside of a Grid.","44":"$getListItemValue: list node is not parent of list item node","45":"Expected node %s to have a first child.","46":"append: attemtping to append self","47":"decorate: base method not extended","48":"updateDOM: prevInnerDOM is null or undefined","49":"updateDOM: innerDOM is null or undefined","50":"mergeWithSibling: sibling must be a previous or next sibling","51":"getTopLevelElementOrThrow: root nodes are not top level elements","52":"remove: cannot be called on root nodes","53":"replace: cannot be called on root nodes","54":"insertBefore: cannot be called on root nodes","55":"insertAfter: cannot be called on root nodes","56":"rootNode.append: Only element or decorator nodes can be appended to the root node","57":"useCharacterLimit: OverflowNode not registered on editor","58":"LexicalNode: Node %s does not implement .exportJSON().","59":"LexicalNode: Node %s is an element but .exportJSON() does not have a children array.","60":"createNode: node does not exist in nodeMap","61":"reconcileNode: prevNode or nextNode does not exist in nodeMap","62":"reconcileNode: parentDOM is null","63":"Expected node with key %s to exist but it\'s not in the nodeMap.","64":"LexicalNode: Node %s does not implement .getType().","65":"LexicalNode: Node %s does not implement .clone().","66":"Expected node %s to have a parent.","67":"Expected node %s to have a top parent element.","68":"getNodesBetween: ancestor is null","69":"Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editor.read/editor.update.","70":"createDOM: base method not extended","71":"updateDOM: base method not extended","72":"exportJSON: base method not extended","73":"Create node: Attempted to create node %s that was not previously registered on the editor. You can use register your custom nodes.","74":"Create node: Type %s in node %s does not match registered node %s with the same type","75":"Reconciliation: could not find DOM element for node key %s","76":"append: attempting to append self","77":"LexicalAutoLinkPlugin: AutoLinkNode not registered on editor","78":"window object not found","79":"MarkdownShortcuts: missing dependency for transformer. Ensure node dependency is included in editor initial config.","80":"Create node: Attempted to create node %s that was not configured to be used on the editor.","81":"createBinding: doc is null or undefined","82":"Expected text, element, or decorator event","83":"syncPropertiesFromYjs: cound not find decorator node","84":"syncPropertiesAndTextFromYjs: cound not find decorator node","85":"could not find node by key","86":"Expected text, element, decorator, or linebreak node","87":"Expected shared type to include type attribute","88":"Node %s is not registered","89":"Expected parent to be a collab element node","90":"getOffset: cound not find collab element node","91":"syncPropertiesFromYjs: cound not find element node","92":"syncChildrenFromYjs: cound not find element node","93":"syncChildrenFromYjs: expected text, element, decorator, or linebreak collab node","94":"splice: could not find collab element node","95":"splice: expected offset to be greater than zero","96":"Expected node %s to have a last child.","97":"$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the \\"nodes\\" array in the editor config.","98":"$initializeNode failed. Ensure replacement node is a subclass of the original node.","99":"Only element or decorator nodes can be inserted in to the root node","100":"splice: sibling not found","101":"createChildrenArray: node does not exist in nodeMap","102":"Can not call $splitNode() on root element","103":"Expected GridSelection anchor to be (or a child of) GridCellNode","104":"Expected GridSelection focus to be (or a child of) GridCellNode","105":"Expected anchorCell to have a parent GridRowNode","106":"Expected tableNode to have a parent GridNode","107":"Expected GridCellNode parent to be a GridRowNode","108":"Expected GridNode children to be GridRowNode","109":"Expected GridRowNode children to be GridCellNode","110":"Anchor not found in Grid","111":"Focus not found in Grid","112":"Stack.length > 0; can\'t be undefined","113":"Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update."}'),l={errorContainer:"errorContainer_OAK9"};function c(){const{siteConfig:e}=(0,i.Z)();return n.createElement(a.Z,{description:e.tagline},n.createElement("div",{className:"container padding-top--md padding-bottom--lg"},n.createElement("h1",null,"Error Code"),n.createElement("p",null,"In the minified production build of Lexical, we avoid sending down full error messages in order to reduce the number of bytes sent over the wire."),n.createElement("p",null,"We highly recommend using the development build locally when debugging your app since it tracks additional debug info and provides helpful warnings about potential problems in your apps, but if you encounter an exception while using the production build, this page will reassemble the original text of the error."),n.createElement(r,null,(()=>n.createElement(p,null)))))}function p(){const e=(0,n.useMemo)((()=>{const e=new URLSearchParams(window.location.search).get("code");if(null===e)return null;const o=s[e];return void 0===o?null:{code:e,description:o}}),[]);return null!==e?n.createElement(n.Fragment,null,n.createElement("h2",null,"Error code #",e.code),n.createElement("div",{className:l.errorContainer},e.description)):n.createElement("p",null,"When you encounter an error, you'll receive a link to this page for that specific error and we'll show you the full error text.")}}}]);