import React, { useEffect, useState, useRef } from "react"
import ReactDOM from "react-dom"
import G6 from "@antv/g6"

import add_icon from "@/assets/add.svg"
import remove_icon from "@/assets/remove.svg"
import branch_icon from "@/assets/branch.svg"
import filter_icon from "@/assets/filter.svg"
import rest_svg from "@/assets/request.svg"

const data = {
  nodes: [
    {
      id: "1",
      label: "公司1",
    },
    {
      id: "2",
      label: "公司2",
    },
    {
      id: "3",
      label: "公司3",
    },
    {
      id: "4",
      label: "公司4",
    },
    {
      id: "5",
      label: "公司5",
    },
    {
      id: "6",
      label: "公司6",
    },
    {
      id: "7",
      label: "公司7",
    },
    {
      id: "8",
      label: "公司8",
    },
    {
      id: "9",
      label: "公司9",
    },
  ],
  edges: [
    {
      source: "1",
      target: "2",
      data: {
        type: "name1",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "1",
      target: "3",
      data: {
        type: "name2",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "2",
      target: "5",
      data: {
        type: "name1",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "5",
      target: "6",
      data: {
        type: "name2",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "3",
      target: "4",
      data: {
        type: "name3",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "4",
      target: "7",
      data: {
        type: "name2",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "1",
      target: "8",
      data: {
        type: "name2",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
    {
      source: "1",
      target: "9",
      data: {
        type: "name3",
        amount: "100,000,000,00 元",
        date: "2019-08-03",
      },
    },
  ],
}

export default function RelationChart() {
  const ref = useRef(null)
  let graph = useRef(null)

  // 声明自定义节点
  G6.registerNode("dom-node", {
    draw: (cfg, group) => {
      let shape
      // const { targetNode } = cfg;
      // console.log('当前', targetNode);
      // const { node_type } = targetNode.getModel();
      if (cfg.selected) {
        shape = group.addShape("dom", {
          attrs: {
            width: cfg.size[0],
            height: cfg.size[1],
            html: `
        <div id=${cfg.id} top=${cfg.top} action_node_id=${
              cfg.action_node_id
            } class="dom-node cursor-pointer">
          <div class="larkflowpath node-card" style="background: rgb(51, 112, 255)">
          <div class="steps-ui-card-head">
            <div class="steps-ui-card-head-img-wrap">
              <img src="${
                cfg.top
                  ? "https://sf3-ttcdn-tos.pstatp.com/obj/lark-approval-attachment/icon/v2/lark_flow_webhooks.png?v=2021091415"
                  : rest_svg
              }">
            </div>
            <div class="h3">${cfg.top ? "Webhook" : "Rest"} (${cfg.name})</div>
          </div>
          <div class="sel-wrap-uicard">
            <div class="sel-wrap-uicard-sel">
              <span class="icon iconfont icon-shezhi"></span><span class="text">Catch hook</span><span class="icon iconfont icon-jiantou"></span>
            </div>
          </div>
        </div>
  </div>
  `,
          },
          zIndex: 1,
          draggable: true,
        })
      } else {
        shape = group.addShape("dom", {
          attrs: {
            width: cfg.size[0],
            height: cfg.size[1],
            html: `
          <div id=${cfg.id} top=${cfg.top} action_node_id=${cfg.action_node_id} class="dom-node cursor-pointer">
             <div class="larkflow-steps-empty-card">
                  <div class="larkflow-steps-empty-card-title">
                  选择操作
                  </div>
                  
                  <div class="larkflow-steps-empty-card-area">
                  <div class="larkflow-steps-empty-card-btn-outer">
                  <div class="larkflow-steps-empty-card-btn-inner">
                  <span class="icon iconfont icon-add"></span>
                  </div>
                  </div>
                  </div>
                  </div>
          </div>
        `,
          },
          zIndex: 1,
          draggable: true,
        })
      }

      group.addShape("image", {
        attrs: {
          x: 60,
          y: 160,
          width: 30,
          height: 30,
          cursor: "pointer",
          img: add_icon,
        },
        name: "add-item",
      })
      // if (node_type !== "trigger") {
      //   group.addShape("image", {
      //     attrs: {
      //       x: 60,
      //       y: 160,
      //       width: 30,
      //       height: 30,
      //       cursor: "pointer",
      //       img: add_icon,
      //     },
      //     name: "add-item",
      //   });
      // }

      group.addShape("image", {
        attrs: {
          x: 220,
          y: 160,
          width: 28,
          height: 28,
          cursor: "pointer",
          img: branch_icon,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: "branch-item",
      })

      if (!cfg.top) {
        group.addShape("image", {
          attrs: {
            x: 310,
            y: 85,
            width: 28,
            height: 28,
            cursor: "pointer",
            img: remove_icon,
          },
          zIndex: 1,
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: "remove-item",
        })
      }
      // 设置条件图标
      if (cfg.node_type === "trigger") {
        group.addShape("image", {
          attrs: {
            x: 135,
            y: -58,
            width: 40,
            height: 40,
            cursor: "pointer",
            img: filter_icon,
          },
          zIndex: 1,
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: "filter-item",
        })
      }
      return shape
    },
  })
  // 声明边上的自定义图形
  G6.registerEdge("flow-line", {
    draw(cfg, group) {
      const startPoint = cfg.startPoint
      const endPoint = cfg.endPoint
      const { style } = cfg
      const shape = group.addShape("path", {
        attrs: {
          stroke: style.stroke,
          endArrow: style.endArrow,
          path: [
            ["M", startPoint.x, startPoint.y],
            ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
            ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
            ["L", endPoint.x, endPoint.y],
          ],
        },
      })

      return shape
    },
    afterDraw(cfg, group) {
      // 获取图形组中的第一个图形，在这里就是边的路径图形
      const shape = group.get("children")[0]
      const { targetNode } = cfg
      // 获取路径图形的中点坐标
      const midPoint = shape.getPoint(0.5)
      const { node_type } = targetNode.getModel()

      if (midPoint && node_type !== "trigger") {
        group.addShape("image", {
          attrs: {
            x: midPoint.x - 15,
            y: midPoint.y - 15,
            width: 30,
            height: 30,
            cursor: "pointer",
            img: add_icon,
          },
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: "add-item",
        })
      }
    },
  })

  useEffect(() => {
    if (!graph.current) {
      graph.current = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1200,
        height: 380,
        modes: {
          default: ["drag-canvas"],
        },
        layout: {
          type: "dagre",
          direction: "LR",
        },
        defaultNode: {
          type: "node",
          labelCfg: {
            style: {
              fill: "#000000A6",
              fontSize: 10,
            },
          },
          style: {
            stroke: "#72CC4A",
            width: 150,
          },
        },
        defaultEdge: {
          type: "polyline",
        },
        linkCenter: true,
        fitCenter: true,
      })

      graph.current.data(data)
      graph.current.render()

      // 自定义节点 点击事件监听
      const listener = (dom) => {
        const nodeId = dom.id
        if (!nodeId) return
        const node = graph.findById(nodeId)
        const action_node_id = dom.getAttribute("action_node_id")

        // graph.updateItem(nodeId, {
        //   selected: true,
        // });
      }

      const bindClickListener = () => {
        const domNodes = document.getElementsByClassName("dom-node")
        for (let i = 0; i < domNodes.length; i++) {
          const dom = domNodes[i]
          // open the following lines pls!
          dom.addEventListener("click", (e) => {
            listener(dom)
          })
        }
      }

      bindClickListener()

      // after update the item, all the DOMs will be re-rendered
      // so the listeners should be rebinded to the new DOMs
      graph.current.on("afterupdateitem", (e) => {
        bindClickListener()
      })

      graph.current.on("afterrender", (e) => {
        bindClickListener()
      })

      // graph节点 点击事件
      graph.current.on("node:click", (evt) => {
        const { item, target } = evt
        const targetType = target.get("type")
        const name = target.get("name")
        // 增加元素
        if (targetType === "image") {
          const model = item.getModel()
          if (name === "add-item") {
            // handleClickCreateNode(model.id) //添加节点
          } else if (name === "remove-item") {
            // handleClickDelNode(model.id) // 删除节点
          } else if (name === "branch-item") {
            // handleClickCreateBranch(model.id) // 添加分支
          } else if (name === "filter-item") {
            // handleClickCondition(model.action_node_id)
          }
        }
      })

      graph.current.on("edge:click", (evt) => {
        const { item, target } = evt
        const targetType = target.get("type")
        const name = target.get("name")

        if (targetType === "image") {
          const model = item.getModel()
          console.log("线上的图形", model)
          if (name === "add-item") {
            // handleClickCreateNode(model.source, model.target) //添加节点
          }
        }
      })
    }

    return () => {
      graph.current.destroy()
    }
  }, [])

  /** 绘制flow */
  const renderFlow = (action_nodes, edge_list) => {
    const nodes = []

    action_nodes.forEach((item) => {
      nodes.push({
        ...item,
        type: null,
        id: item.uuid, // 添加删除节点所需要的id
        action_node_id: item.id, // 给后续的节点详情，编辑节点信息使用的id
        selected: item.top
          ? true
          : item.type !== "ActionNode::Simple"
          ? true
          : false,
      })
    })

    const data = {
      nodes: nodes,
      edges: edge_list,
    }

    graph.data(data)
    if (nodes.length >= 4) {
      graph.set("fitView", true)
    } else {
      graph.set("fitView", false)
    }
    graph.render()
    graph.fitView(30)
  }

  return <div ref={ref} id="flow" className='w-full h-full'></div>
}
