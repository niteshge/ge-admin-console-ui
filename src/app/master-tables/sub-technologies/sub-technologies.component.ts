import { Component, OnInit } from '@angular/core';
import { SubTechnologyService } from '../../core/sub-technology.service';

@Component({
  selector: 'app-sub-technologies',
  templateUrl: './sub-technologies.component.html',
  styleUrls: ['./sub-technologies.component.css']
})
export class SubTechnologiesComponent implements OnInit {

    treeDataJson:any[] = [{
    "children": [{
      "children": [{
        "children": [],
        "item": "3D Printing Manufactures",
        "id": [1, 0, 1, 2] //[tech id, from its id to the parent in sub_tech]
      }, {
        "children": [],
        "item": "3D Printing Material",
        "id": [1, 0, 1, 4]
      }],
      "item": "Hardware",
      "id": [1, 0, 1]
    },
    {
      "children": [{
        "children": [],
        "item": "3D Scanner",
        "id": [1, 0, 7, 6]
      }],
      "item": "Hardware + Software",
      "id": [1, 0, 7]
    },
    {
      "children": [{
        "children": [],
        "item": "3D Printing CAD Software",
        "id": []
      }],
      "item": "Software",
      "id": [1, 0, 8]
    }
    ],
    "item": "3D Printing",
    "id": [1]
  },
  {
    "children": [{
      "children": [{
        "children": [],
        "item": "Image Recognition",
        "id": [2, 0, 43, 49]
      }],
      "item": "Computer Vision",
      "id": [2, 0, 43]
    },
    {
      "children": [{
        "children": [],
        "item": "Speech Recognition",
        "id": [2, 0, 54, 60]
      },
      {
        "children": [],
        "item": "Text Analysis",
        "id": [2, 0, 54, 62]
      }
      ],
      "item": "Natural Language Processing",
      "id": [2, 0, 54]
    },
    {
      "children": [{
        "children": [{
          "children": [],
          "item": "Cyber Security",
          "id": [2, 0, 40, 940, 44]
        }, {
          "children": [],
          "item": "Marketing",
          "id": [2, 0, 40, 940, 53]
        }],
        "item": "Functional Application",
        "id": [2, 0, 40, 940]
      }],
      "item": "Application",
      "id": [2, 0, 40]
    }
    ],
    "item": "Artificial Intelligence",
    "id": [2]
  }, {
    "children": [],
    "item": "Big Data & Analytics",
    "id": [3]
  },
  {
    "children": [],
    "item": "Other",
    "id": [99]
  }
  ]
  constructor(private subTechnologyService: SubTechnologyService) {
    this.treeDataJson = this.treeDataJson.slice();
   }

  ngOnInit() {
  }
  node(node){
    console.log("the parent component ",node);
  }
  action(value){
    console.log("the parent action",value);
    this.treeDataJson = [{
      "children": [{
        "children": [{
          "children": [],
          "item": "3D Printing Manufactures",
          "id": [1, 0, 1, 2] //[tech id, from its id to the parent in sub_tech]
        }, {
          "children": [],
          "item": "3D Printing Material",
          "id": [1, 0, 1, 4]
        },{
          "children": [],
          "item": "Dummy",
          "id": [1, 0, 1, 100]
        }],
        "item": "Hardware",
        "id": [1, 0, 1]
      },
      {
        "children": [{
          "children": [],
          "item": "3D Scanner",
          "id": [1, 0, 7, 6]
        }],
        "item": "Hardware + Software",
        "id": [1, 0, 7]
      },
      {
        "children": [{
          "children": [],
          "item": "3D Printing CAD Software",
          "id": []
        }],
        "item": "Software",
        "id": [1, 0, 8]
      }
      ],
      "item": "3D Printing",
      "id": [1]
    },
    {
      "children": [{
        "children": [{
          "children": [],
          "item": "Image Recognition",
          "id": [2, 0, 43, 49]
        }],
        "item": "Computer Vision",
        "id": [2, 0, 43]
      },
      {
        "children": [{
          "children": [],
          "item": "Speech Recognition",
          "id": [2, 0, 54, 60]
        },
        {
          "children": [],
          "item": "Text Analysis",
          "id": [2, 0, 54, 62]
        }
        ],
        "item": "Natural Language Processing",
        "id": [2, 0, 54]
      },
      {
        "children": [{
          "children": [{
            "children": [],
            "item": "Cyber Security",
            "id": [2, 0, 40, 940, 44]
          }, {
            "children": [],
            "item": "Marketing",
            "id": [2, 0, 40, 940, 53]
          }],
          "item": "Functional Application",
          "id": [2, 0, 40, 940]
        }],
        "item": "Application",
        "id": [2, 0, 40]
      }
      ],
      "item": "Artificial Intelligence",
      "id": [2]
    }, {
      "children": [],
      "item": "Big Data & Analytics",
      "id": [3]
    },
    {
      "children": [],
      "item": "Other",
      "id": [99]
    }
    ]
  }
}
