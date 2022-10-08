import { css, keyframes } from "styled-components";

export const glitch1 = keyframes`
0% {
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
}
10% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
}
20% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
}
30% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
}
40% {
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
}
50% {
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
}
60% {
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
}
70% {
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
}
80% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
}
90% {
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
}
100% {
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
}
`;

export const glitch2 = keyframes`
    0% {
        -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
        clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    }
    15% {
        -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    }
    22% {
        -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
        clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    }
    31% {
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    45% {
        -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
        clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    }
    51% {
        -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
        clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    }
    63% {
        -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    76% {
        -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
        clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    }
    81% {
        -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
        clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    }
    94% {
        -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
        clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    }
    100% {
        -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
        clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    }`;

export const glitch3 = keyframes`
    0% {
      clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    }
      5% {
          clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
      }
      10% {
          clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
      }
      25% {
          clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      }
      27% {
          clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
      }
      30% {
          clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
      }
      33% {
          clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
      }
      37% {
          clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
      }
      40% {
          clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      }
      45% {
          clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
      }
      50% {
          clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
      }
      53% {
          clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
      }
      57% {
          clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
      }
      60% {
          clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
      }
      65% {
          clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
      }
      70% {
          clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
      }
      73% {
          clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      }
      80% {
          clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
      }
      100% {
          clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
      }
`;

export const flash = keyframes`
    0% {
        opacity: 0.2;
        transform: translate3d(10px, 5px, 0);
    }
    7%, 100% {
        opacity: 0;
        transform: translate3d(0,0,0);
    }
`;
