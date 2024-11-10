import { Graph } from "react-d3-graph"
import './styles.css'
import { ID3Graph } from "../../context";

interface INetworkGraph {
  data: ID3Graph | undefined,
}

export const NetworkGraph = ({
  data,
}: INetworkGraph) => {
    const config = {
      nodeHighlightBehavior: true,
      staticGraph: false,
      staticGraphWithDragAndDrop: false,
      freezeAllDragEvents: true,
      node: {
        color: 'lightblue',
        size: 500,
        highlightStrokeColor: 'blue',
      },
      link: {
        highlightColor: 'lightblue',
      },
      height: 300,
      width: 600,
      directed: false, // Para grafos não direcionados
      d3: {
        gravity: -200, // Controla a atração entre nós,
      },
    };

    return (
      <>
        {data ? (
          <Graph
            id="network-graph" // ID único para cada instância do grafo
            data={data}
            config={config}
          />
        ) : null}
      </>
    );
}