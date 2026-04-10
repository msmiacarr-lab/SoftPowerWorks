import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";

const founderImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIYSUNDX1BST0ZJTEUAAQEAAAIIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAGRyWFlaAAABVAAAABRnWFlaAAABaAAAABRiWFlaAAABfAAAABR3dHB0AAABkAAAABRyVFJDAAABpAAAAChnVFJDAAABpAAAAChiVFJDAAABpAAAAChjcHJ0AAABzAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAEYAAAAcAEQAaQBzAHAAbABhAHkAIABQADMAIABHAGEAbQB1AHQAIAB3AGkAdABoACAAcwBSAEcAQgAgAFQAcgBhAG4AcwBmAGUAcgAAWFlaIAAAAAAAAIPdAAA9vv///7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOwAAEQsAAMjLWFlaIAAAAAAAAPbWAAEAAAAA0y1wYXJhAAAAAAAEAAAAAmZmAADypwAADVkAABPQAAAKWwAAAAAAAAAAbWx1YwAAAAAAAAABAAAADGVuVVMAAAAgAAAAHABHAG8AbwBnAGwAZQAgAEkAbgBjAC4AIAAyADAAMQA2/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgGAAWaAwEiAAIRAQMRAf/EAB4AAAIDAQEBAQEBAAAAAAAAAAMEAAIFAQYHCAkK/8QAPxAAAgIBBAEDBAECBQMEAQALAAECAxEEEiExBQYTQQciUWFxFDIII0KBkRWhsVJicsEkMxY0U+EXJUPR8PH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIxEBAQEBAAMBAQEBAAMBAQAAAAERAhIhMQNBEwQiMmFRcf/aAAwDAQACEQMRAD8A+BRax3wEXQBSyGr7OPXZgq+AsMlYjEK/kramRavCaQ1CPAOqGWNVw4I1OBKvIeul4DRrxEPVXyhqcBhVtwMRjkPGqPyEjSsjUYDXHLDRiEVfPQWNX5K6rgSzjkvtyFVSayWjB/ganAkjntPIyqk2W9tZGowq6ngFKvk0JQ4BOtJDU4Cuijyg0lgo0NRgeH2ck8ovhrIOS5ZbTA2CfYV9gpfI2mBuWAM3yXk/gHNjTFcZKTZGwcn2TKYrLAN4Oyk8YBN8ltMSTyCwWlz0CcuRpgi4yVb/ACTOUUyNMdbwVZJdlGxpi2CFN37JlEJxchTKJlDUYuQplETGmLkIQaYhCEGmIQhBpiEIQaYhCEGpkQhCDVsQhCDTEIQg0xDsezh2PY0xYhCE6Y6uyxVdliNMQi5IczgaYuQplE3L8k6Yu+ipzJ0aYh2PZw7HsjTHSEINMQhCDTEOxOHY9jTFiEINMQhCDTEIQg0xCEINMQhCDTEOxOHY9jTFiEINMQhCDTEOx7OHY9jTHSEINMQhCDTELLoqWXSGmOkIQaYhCfJCtpiEIQaYhCEGmIQhBpiEIQaYtHouUj0XGmOSOHZHBpiFl0VLLobTEIQg0xCEINMQhCDTEIQg0xCEINMQhCDTEIQg0xCEINMQhCDTEIQg0xCEINMQhCDTEIQg0xCEINMQhCDTEIQg0xCEINMQhCDTEIQg0xCEINRIhCEGpxDq7OHV2NMEXR04ujo1aRCEINqcQhCDTIo+yEfZBqmIQhBpiEIQaYhCEGmIQhBpjxikMVctYEoc/I7T8YLKm4R/I5VHMUJRzwPU8QRWphiqP6Gq4C9Tz8jMGQsIlxgYhwkArjljUY4ALBNjEIcIpS1gLnnsC8IILGO4HGQWMsFFHVH9HdhePKOgcUcIqlyy5XfmQEBTTYZtA5zTAC8NFZIs45/QOX2gcfTBP5LuXHYORaAb7BS+QknyDk+WSFpLsHNhZSF5yApnspIjfOcnJyygByeQUsp9HZSxxkrn8suKyf4BPLYR8FG8ARPhlSZ/ZG8YA5Jg28l5yKAdxwcwXIQKYIWfRUkQ6uzhAC5JkqQC2SZKkAtkmSpALZJkqQC2SFV2WCYhCHJdBZ3JMlSAWIVXZYCHY9nDsewLEIQCLstkqQCyeSHInQIQhAIQhACRfB3KKrogTKu+CFCy6CXSEIEpgmH+Cy6IBXBMFiAVIWJgCEIQCEIQCHcHDqYFGuSYLEArgslwQsugOYJgsQCuCYLEArgmCxAK4JgsQCuCYLEAqW7IQCEIQCrXJMFiFBVLksQgEIQgFWuSYLEAqkTB1vDJuA5g4u8FtxE+egOkIQDjf6OYLEArgmCxAK/7EwWIBXBwuc2gfn+Mkw0J8iCky6taO557QVvwE/qdqSzkzPfafJdWN8hMPvVcnP6p5ElY8s7uyFmj/VNR75KrVyXyZ6t5wXU1ghDSr1zXZd+QSZkOxrroqptkjZ/6iR+RyY+6X5OOck+yMV1trXv8lo+QeezEVzRZX/sYa21r5Zzkv8A9QyuzEjqH+Tj1EvyMNbT1zx2V/rnnsx/6iX5J77GGtiWr57KvV/vkyHqX+Ss9Q8rDGGtZ6v8sG9T+zLlqHjs4tQ+MkYu03fn5Ke/+xB3nPeIw09/UJvs67FxyZ6fOQieF2MNOb1js5GxL5FVLCbyCla0xhrRjas9llYsdmarmsBFeDTXvYZZXCalxlnd4NOq7HOTv9R+WJ+5ldk3MJlPxvO/1ORFTO7yPa2no6jgvHUcGf7nJf3vhj2aeWpywq1CwZ3uJrsnu9D2a0lqV0d/qDOjaiytyh7Rp/8AqDsdTjszXb+y3ur8j2nWktR9yCe8Zkb8Y5LPUZa57C0rR97gkbvyzP8Aea+Se6/yStrTVsS8bsGUr2n2XWoeQa1Y3Iv7qMmOo/Zdan9hMaqtO+7+zMWpWOzq1OfkJ1pKz9l424Mxaj9l1qEglpO/rBFqWmZ61GTqtwwNJag69QZ6t5Ou3jsB9anB2Op/ZnKxfkupr8hGtKN27k77ghC5L5L+9+ylSc9wnufsS90nulQ9Ga/3LKaYgrsfJdXYAfjZgv7pnxuz8lvd4Ae907G39iHu/s6rf2BpK4tG5fJm+7gJG1NDA+7TitYnGxMIp5+QG1bkjsFlP4yWclgA0bC/u/IqpZ6LbvjIwNxuwd95MUc/2c3/AIGBz3S8LUIqWS0Z88jA8rERWLIpvT6ZIzTQwNOxEdmBbdg7v47AY3l42/Ap7n7IrMPsB3cmWU8ikbEmWVnOQGXLJwEp7lkm/ABXwdTwCUuSbszeOgGItdF8psWyy0Z8oA03ho4Uc0c3IrQQhTOTqkkiBYhxTR3cgLRWDpQgFyFFk6BYhQmQCReclgcToFzmCpZcIDpCEA7E6ciWA4QhAIQhALrohF0QCFl0VLR6C0dIQmAlZdEIuiAQhCAQhCAQhCEaIQhBohCEGiEIQaIWXRUsuho6QhBohCEJEIQhGiEIQkQhCAQhCAQhCLlgQh3aTaVHCHdpNpA4Q7tJtGjhDu0m0jRx8FAm0soEgJ1dhdhNn4AoQ7tZNoHCHdpNoHCHdpNrA4Q7tZNrI0cO7Tqi8lto0fniVDXwc9pmm6U2c9g9F52M105+Asa8RwPeyT2Qln7Djh8D0qcFPZARlW0RwHHVn4OewAp7Z1LA37BSVICzxkoxl1ZK+yyoAToI6mmc9sCmWW3HdmSe2BxySJuyjvtk9sAeSZRxp5Jhgdyjj5ONPBeKeAKYI8sJtOYYQmeMEbKcnXlsJWzz2W7B4w0EXQEwiLg6QCxCmUTKAIuE2dTTQJy4IugmCqXLO7uOwRMhIuTueQe74yTcARN57CZ4F4y5L7v2EwXd+ybv2Byibv2QvsMbju79iztJ7oNMOWV2cTx8gVbyWdiK2I0xG3HyXlfwIu7HRR3YeGVw8jqv+7OS/v5aEFP9loz5GI0+r+S/v5+RDf8As77v7GLSn1cWdy+DPjZx2X90ssejZ+y6s5zkzvfa+SyvJwaSsws5OrUGfHUZ4LKffJSo1oR1GPkstQmxBP5ydc8Lsg08r/2XWoT+TLV3wdV3INanvJc5I9V8ZM/3crsinn5JWlaS1OPkutQn8map8dloT2ctjE60laXVvJmrUL8llf8AsYa0lbynku9Rn5MxX/snvP8AJaQ1p++vyT30Znv4+S0b/wBjDWn7/wCC/wDUpcGYreM5LK7PyMNai1C4eTq1XPZmK46rsPkL61f6pJ9l/wCoT+TJV37CV3c8kDSjc28J8F42vPZnq38MurscjA+7fyzsZpLOezPnd1ySOoaGDTjYW93Bmx1WC61OQH1cs9l/eSM5XL88l/dT+SQ67UyKxCbswuysbcPsyo0YzR3eIxuf5O+8/wAlcD6sRdTW39mdG557Lq547HsPxswW94ShZlPkjs/ZYOu8tG/AjvTS5Jv/AABoLUHfdyuDPjY0+Q8LEA2p7jq7Fnaovst76SAbTSKtpC8dQsHJ3AMKafQTekJRtRaNv7Ac9xRLe7lCanu7LRln5AbVqOOW55AKSfBdTSIBG8s5hlfcJ7gwErky+UL+5hE90qGMo6Le6EhZmIBSFPcJ7gBYpl0sA42JIvGaAuo5OS4ZFNZbKSknICxCmcEygDLogPKO5QFzm/HBXKJFbmEwRWYf6CKaYKMeS0YhPt19kI1yQJxCEIBCEIBCEIUEIQgEIQgEIQgELLoqWXQEIQgEIQgHV2WKrssBCEIBCEIBCEIBDq7OHV2ARdEIuiCCPoqWO4YFCF8MmGRgoQvhkwyooQvhkwyRQi7L4ZMMDhCEAhCEAh1dnDq7AtgmCEAjSwULvooB8UVMkujjg18Gn7YJ1cndrzySqk+okdTz0aEK8FZ1ZkydCEqn+Cjqf4NH2/0c9pfgjRmOt/g57THpUZZz2BoS9t/g57X6HvYOOrHwToRdP6KOrDH3WU9rkkZ3sv8ABPZy+jQ9r9HPa56Az/Z/RX2mn0Purno46uOgEfaf4OOvKHlXj4KOvDAzXS/wT2mvg0ZV5+CjqARdf6OODXwPe1l9YO/0/GcAIbX+Dm1v4HZafk57ACTg0RwHXRko6AFVEttwg3sYO+28fkBZkDSrwV2c9ABw8kw/wH2E2ABS5CJLB1w4OYfATEwcaLYJganVMEL4BtBKf7nclUuQuzCCFM/srvS+SziUlDC6INTd+zvICOc8hXPAHXLC7K+6vyCnLhgt36JzTTLmn8nHNfkX3E3YI8TRfdaZZWsX9z9E3/pjDTXvYRVXZ+QDswuUVU1yMTKbjqHkur+exJWBIzQxbyNqzPydVn7Fo2YLKxIYeRtTxyiyueRVWZ+S8ZFcRpr3zvu7uMizkVhJxZGI05vSfZ1WJ/Iq3uOJNMYae34+TqtYmrOcdFlYTi8N+7+yztyuxLeWVnJOJNKbyWjZh9i3vI47cshJ12fhnPdkKK74Le6SGfdeCRuaFvdJ7uRocjc18l43sSjZ+y8beBocV7+OWdjfJ9oVhdtZd3J89EJ01/U7WWWo5EfcTZeNnINPf1LXXJdaiXQkreSyuwDTy1GVyzsbhL3F+TsbkmDT6t5Le/tEfeR1W5CdOrUZLLUPImpl1PgI09HUL5Z1W894EXZjB33eii8aCtT+S3uJ/IgrOC8LcLsjFju9llZyKRvySV+PkYg8rlFdnfeEIWbmEnbiKwLA1737CRuMyNuX2MK1NEB33fwddzj+kKRswuyO3PyA2r93yWWo6Qj7mCys4A0FcdVvPYirP2R3Y+Rg0FYn8llZ+zPjeEV/yA87lFdloXcZM5WZfYaNmEA4rvllv6hY7EJW/skLMrkDQ95P5Oq39iKngup/sByFifyd91LjIip/h4Oqxr5KB7evydViS7Efd/ZZWc9gO+7+ye5yKqxP5O+5+wnD9c8rll42CELf2EVoMOxs5Lb0JKzK7OO7nsJw/uT+SKSfyIq/KLK4GH9y/JNy/IpCe5ZLRljPIMM7l+SbmugG8t7uAjDEbGi3uCvuk90Hs4pJrs7uX5FI2F42IG0xkm5L5A+4ccsvGQaPuX5JkCmXjYgavkmQbfPfB1L9lDV8kyijJgJ1fJ0oXCUIQgEO5S+ThxrLAvkhVLJdLIHCEJkDq7LFE+S+QIQmSZAhCEAhCEAh1dnPgkc55AKlwQtngq+QInyXyDxydJF8nG+CpCKLohF0QqIQh3aBwh3aTaBwh3pM4RohDjeCdjR06uziWTqjh5AsQ5kgHSHDoHzyUcMrhjLrJ7R3PPLbf0TAx7RPaCS+05tb7GfaJ7Rb0F/YzyVdGRtpYONBJP2MZKuGBt8lXVnkKldjOqv8jKrI6yoVdf6KOOB32uCrpyAm4ZKOvkcdTJ7PACWw77eRz2CeyAi6zmzjocdOeSeyAmq+ejrp6G/YwTYAk6f0UdOPgdlAq4P8AJewVlTwPOplZVckhD2MlXThmh7f6J/Tt/BIz/AGjrp46H/wCnf4OPTvA0Zbq5J7Q+9Oyf07GjP9k46Mmj/TsjowgMx6fJV0Gk6Sns5I0IrTkenz8D8acnZUNDRly0+PgDOo1JUtPoFPT5JGTOpgHW9xrWadroC9PgkZk6/wBCtsdpr20cdCV1GUwM2x/awKWOR2VHPIOVOAFLOQDgOyr4Bup9gKuGSrrGcY+CjWYsAEoYRRdhpxbiysamwKpLIVcfyRVnXD5At8l1wSNeeQ0K8gVr/uQZro7CkL7b6wBWAWT+wtXUG9n7QFYp5z8HWuBhU4LOnjoBPbu4OqvAdUOJ1QZAEqzu3ATDJsbJA8EL+2T23kgVSyUnXyHjBplJp5A4ofaVxtYaK+0q4bngkSH3HfaydjHack2kQKuGx8Hd3RWOZsv7bRFXi0ZYLt44BYZEyECHcg3LJMoGibkuysrEmV2ufRx1tchpys7miRuk3yDc1HspO3csR5YWNRTzkJvwJwvljHyDt1EogOyms8nFJP5Mifkfuw3g6vJxS7JkQ1/dUPkLTr4xzyeZ1Hll8MWh5dJ8yJTr1dmvjuymdXkY4xk8v/1KL/1A35WCf94w17CrXxknyWhro7uzxM/Nxh/bLOS9fmXJp5Ipr3i1sZRwmU9/98nltP5hcZkaNXkYSSyyBrQtzLkrZN7+BavWV/nkKrYz5yE6ajdhKWeiO96h4+EJyvi/tTHdLCMa3Jk4aIpKqBR6jJn6zV/5uF1kLTNMjDTG7L7D02YBqK25Ae5skxhp96j2+md/qdy/YnCXucnXxnkrhptX5Yaq5PszPcaReuxtrAw1pzsTQFWJPsG8vvgFLKYw0/GzK7KytFVbtRWVuWMWh2M0uc9lvcEldwi3vDEm/dZ1aj9inupkchYk8r+OyO7PyKRnhHd6K4Gvef5Cxv475EN5ZWDA/DU5+Qnv/szlZhFlbwRge95tpfARXfGTNd+CLUEWDU97Hycd/PZnLU8klqUpdkYNNX5+S3v5ZlLUF43jBrQ1HPYZalfkx4XPIeFv7IS0XqP2dhcZ0rV+SRvwuwlqe9yW9/gy1qC0dQBqRuCK4y43/stHU8hGtT3sHVcZq1Gfk7/UIJ1pq55/Rd3Y6Zlx1GSy1CyDTy1H3dhVemjOVqbyEjZkJPe8Xjf+TP8AdCRsAfjd9xb3hCNvPZaNnPZGB52tFlbwJ+6uMs6rUiA6rSe48iiuRz3yA/7qZZ2Iz1b85Ce/wA5CfIVWZM6F3IX3ugHHPkup8CDvLK/gB1SI54E/fI7wHVZ0EjNPORJW5RZW4KhzfnOCgH3Se7lgMp/gsmLK7BdXIAzy0RFVasHPcQWwRdhMoB7iOe6AxlEyhf3SRt5CcHxkmGcdiwie4VpiOLaKqPB12LBz3MrBCF4r8nZJ4KxmdnZFLsJxx5yQruz0WXI0x1dltqIlhHMoah4rH6Jj9BXBomxnoPMCx+iY/QXYybAkLH6O4/QTYTYAJQ5Kzrz0H2E2MaFXU/wWUeMYD7WyriToFt/RNv6C7CbSAL22/gq4P8DajwVcQE5wf4Le3lDLjn4KOPIANh3YF2MmwBfYR14GvbX4J7S/ACrhn4O+2mMuvjorsJgXdGX0U9n9Dewm0kLKlNcorKjPSGNjZHBgKOjD6Oey/wBjiid2lb6CXsy/BHU/wOOLJsI0Zzqf4Oe2/wAGg6ck9n9EaEFX+i3tRHXSsA3R+i8CkqYlPYQ6qH+COj9E4E1QkzsqlgbjTyR05GDOnT+gE6X+DTnTgFOHAgyZ1NfACyvjo1LK+xWUOMYJGbKHHIvZUm8mjdXj4FZ18MDPsqjy/kVsgvgeur+4E9P+gM6UUmVnWmuB6emT+AUqMLgBH2f0VdH6HdhXbl8gIun9HFXj4HHHko6mACNZb2v0GjDkKq3IBaupy65GYUtfASFWwPXFtgDrp56Dew38B6qW5IbjR+QEIUv8B1S38DsaF+AsKOSBnqh/Kwd9n9Gk9Png7/TY+Boy/wCmbfRHpkl+DTlThMFKnchozXQmiro2rODR/p/0VlT8YJGe68EcEPrTZOPRvPXBASjWsnHp8vofWjZ32tvwSgjGhJclJVJPjkfdeSsdP92cEBGMPh8FnTFrsanpsSO+xx0SkkqopnJQwHnTiSZaUVs5K1YnjJSUMIYUEugby5PJABtZ3Dx0Sc1B/opZqYxXYBI3Rr/uBXa2v/1IR1WsjjtGNrdfGPRMW1tWamMupAv6yOnzKUuDylvl5xfDYpqfLztW3LGJ8nrJ+airP0U1XnK3U8SWTxkvISfZVazd2ThrYn5SUpyzwslJ66bXDZmO+MsFlcl8kyGmrNVY/wAgXfJvmTiK2ahvOGCVkpvlljya8Lls/wD0nIvOb3f3iW5p9luWTiPIzKbysSbGq5zUROiLlyMyt2RwUsTq61tkJfJdeXthJcvH8iErsvoJXBWdkYeTd0/mptLk1aPMy2YbPK1NVh1qfhMjDyel03knZdly4TNn/qea1GLyeEhrHUNafzDTwWiz2EZKa3SB/wBRNWYijP0XkI2pZY1K+MbMoJbVd0lWnLgDKTslwKvXqUcZLVahLkBxXOlYLLUKS7FHqYzzyWjdXt7RUNK2MnjOWSVjrnwjJnroV2cNHZ+SU5f3EDehqW1ygctVyZUdf9v9xX+r3fIGr7+55yV9xyfDM2Wq2x7LUa1c8hOtGNjzyzllk4v9CD1mZjUdUnBZJw0Wu2eeeg8b033yKf1EXHCBxvSkMTrRlc01yVd0vyKTu65Ir+CuGm1bJ/J13ST7FVd+yOzLyMRptXy/JdXvHYp7hZT/AOBhppW5WcnVcvyK+5z0R2IrYacjcvyR2pvsSU8llIjDTkbMfOSytz8im4spDDTkbmvkJG94EozwW9wjFtOO9kV3HMhb3OF+Qcp8jDWhG7rkurf2Z8bNoaFqbGf008rcLs7G79ijsTObyhp5XY+S3vZ+TPU+eye9h4CdaUbv2Wjd+zNV/wCy0bwjWpG/AWOoz84MlanD5LLVZf4CzVldz2XjqOOzLWpLq/P6CWnG/wDZdaj9matQmjqvWQiVoe9L8lo3SM7+qWeCy1L/ACVqdaKvkE91Nd8mYtTx2XWqwQa0YzeOwis+dxmR1TxyWWpCZWnG1Z7CK5fky/fWC6vTQS0HbyuQqtX5M1XovG5ZA0PdX5IrE32Jq1HfdQDyuS+S/vRXyZvucnVZllRp+6kuyvvP8iKtTJ7/AOwNBXZf7CRt57MyN+OQsb+ewNL3U12RXL8iCt47LKzHIWOq3L7Cb0/kRVyZFaA9vX5Ip89iit4yWjYmEnVasdkdqXyKbzu9YK1Br3E12RSb6Qqp8ho3YIBVJ/gtn8gladdicewDKaXyEjOP5EnLPJeMgHZTTjwwGZfgHvwW98JYDryR1sLFcZO55O/Xm5QFU2yri08DIOUW2VqcC2nNobaTaSYDtO47C7SbQBKJPaywu07FMRFgPtE9kPtO4eMFkFsE25CuGHwRQAE68LJX28jOzg5twAD2zjqGNpNoC7i0TaH2E2AA2k9oPsO7QF/aJ7QxtONMBZ1HHUMbSbQF1Vg77QfaTaVoX9rJHVgY2k2ZRUKbSbRr2SeyPYV2ndoz7KKOvDwWgBteSSjhB9v6JsyWCqhwRxG/ZOOlRROhCUcsHZXwOypw8g7IrBOjMspYvKo0bIC84YYGbqK+OuROdXBqXwyhSccEjKtq+7JWUeBuxZYGUVyApL+AU4PHA3KCfZScG4gIe212VdY1KGCjjjkBdVfcR1PLDxT3IJKKwsEBSNHIzVSjsUkw0UmyRV0JvgJVpsPOA8KsNDcKVggBrqSxxyMKDkXqq+4cjUhoWrq/KCKrA1GpF1TkrQtCpt5Lzq44Q7XQXnQmuAMl1tnVp8fA8qMP9HZV/hD4QjKhbeuQDoafRouuWf0WjRl8oaM2NHzguquTQdKXGCntAKeymgNmnz8Gj7XZz2vyBlvTPhIJHT4+B2cUugbW3LJCUqE2T2EkHl3kjksDTCF1GRLUQcV3wPau1pcGXqL8L7miPqy9SWBTXamvTrOVkR1nmYaaD+7k8h5P1DK6bWeCR6DWeWgs8mRqPM4ziR527yU7JcMH7snHLIwamq8rKfTEJ61y7FnNHG4vlF+UiSsT7KS2PrsDN5OVwbbyWFnBSeDi07k+C23jgvCbgEf1R6Zx6KbHEYeoT4KSlvzgvIroLeGWjgmz8nMr44Bo0IoNGvPyK12YGFaog07poKMXkFqGssF/WqEXgW952yeCtWHSXbGKpJIU3YQSmf5IgNZZzwXpeZYYHhl67VWssGj3RSaJXXjkWu1Csaa+A9E245CdPU6qVC4Y5X5GVkeWZkcWotH7VhA1r065yn2O/wBe1HGTA0122XIy5Sm1gGtGetlGEnkQl5mak1uBau1114fyZCscpvJWp2tl62U55cituunCXEjN93a+C3u55YRrTj5WxRxlhqfKTbXLMeNm7oNVJxksjBtT8g5R5ZfS63L7wZMrMwyCr1DjJ8jF5Xp69TGU+x92J1ppnkqtVJNGivJ7alHIw2Nqq3c8ZCx4lk89T5Pa+WMQ8spyST5GJ2NyU+Tm/oTrtlKKZPf29lE60FYm+ye4s4EY355yFjPK7IwOKxJFlYJKzDLRuS+SQ77qXzySNmRJ2/cEhPkjEU4ppBIyQorAsJIqjTKa7LKSfwLqXBeMsjTRsZaZZdlFJF4yX+5MTqxMI7wiZRbDUTOp8ZRPg5ngiw0VTeDu8BF8ljGpF3kx92QR1SaIBkljkso4QL3fg67P2DRN3KzyWTF9+GWVjYX0fdyddrQD3WTc3yE6YjdwXjdlCyeUW3BGmoyXeS0ZfsT3MsrOCLA6p/snufd2Ke9k57mOSMTp9WZOqzjsSjaWVj/IwlOK8vG8RjLJdTIaHlfz2EWp2oz3NM6ptoDSjqX8sstRn5M1WNI6rscAaSvLq8zlbgt7uCo0Y3kV3xkz1elhkWoW8DTVheNmPkzf6hF1qF2ENJXcF1fldmd/ULosrkFpWgr8HVfkQVq/JbftX6BrQV52N7XyI+8kiO37eGE60f6nK/YRangyVa0XV2GVo1VdwdV2TOWoRZX/ABkgaPvFve45M5XYfZZ2/sDQjev9i3v8/ozY34Zb3n+QnGkrtxbcjOhbgJ7/APAQGk5Lki4YVxXaJj5wdc9uKVXj47ONcljuGXkRaoQvtZMMszUIXwyYYFCF8MmGBQ6lgtjkuogDIX2ZJjAFCF8HcMAbWTm0JtO4YAtpNoXDJhjQLaTaFwyYY0C2k2oLhk2gCwjrWS7j/wRL8AViuCSiEUeckcQFpQTYOcVyMSj8gLHjJpyUrZBYFLa/katF5suqQvTE7eB+9CViJGdbnLz0KWx5Y7dzLArbHBaBZrCF58sbxhPIvJLJIoQuokUcAUIuy7XBxIIErXI3V8C9aysDdUcYIqTda5Q7Ty+BWuPWB2mPBnV+TNa+5DMeBetYkhqMenkcl+mKllDVcOcAKlwM1rBZAiW34KWS/Bdy4F7Xn5CXHZhgP6xQlI61yY+qvVd0lkIqazzM67pYMbyfqRfcpySWCvlNdVXGTbwz5d6p9RbbpRhMtirR9R+o4NyxM8Tr/Myuz9zx/Jma3yE9Q3mT/5EnZjtkyLKai6U7ctgm8nbZKb4KJZNIiiQWS1le6KOVrDQeK5JQXdWFwVUcMNbLHQP9gF3faBnFvk7nJ1yysfIC8n8FqtNveSyr3SGZr26k/kILNKkq9Rv4+CW5n0BVEs8EGGINRywVlm5khTNlnpZNkxOK1xTY1TBww8Eo0bY6tM610VtXkFqUJV/c8Mr7cN+UWjpZz6CV6KcOXkprSR2eVFcFIJzeMDSj7iSx0XWn28jVsL/ANIksorGrLwxyEW3jAS3S4gmkVvSfEkvs6CQtk/2zsqcMYorUe0UtXnKm1zWZJAZpJ8GhZFNLBWOmjL/AHJnReSUK1NnXVseIoejpVHoPVplY+SfKI8SCg3HkoqGbS0S2gZ6fDxgjyPFnqna1lBo1bmuBiWnys/gtRS3Ii9LTkaivEMM77W2WcBHFwSXQaql2QyR5LeACW7jASNXtc9F4UtSJq01DgeSfAtdqZOaUQdlbxuYKtS+546GaISuTTRedM7yrpWpyUWNaiiFaaj2Cq03s25bwaUYQl9zZeVW8+nmpU2PUZa4G7NlUF+cfg05xqnZhYyKa/RbPu5wTrOxjarVyU1gy9da7Pg356NWwcl2jN/p4u9KXWSqtjDnGW3lAa8xXCPaW+N0702f1+Dz2p0sITajyi0VsZ2eeS8HFlLtPJPgAt0Hz2aSqYa9vnKD1rHAlHUPkJXZJvJKI0FDK7OpOPAvC+X4LrUL54ZA7LLZMM576Oq1ZyEo7JRQau7EeTkqlOG4pGt4ZFgrPUvdwNw1GaY5fItGlOXJW1ONm1dAeh8ZrXXFLJu+M8rKNi5PH6Wz21yzT0msUGnkWTB9K8b5VWtJs9DptQuD5l4nykVYvu+T1+i8vVJRW4xsWezqtU4IJCpT4MrRa6DguTT02pjKeE8mdDENPgMq8cDEIpwTOYyZ0LOv9FfbH1Vx0d9kgIe3+gTr56NT2MlXpsvoDN9r9EdTz0aS0zz0R6f9EDLenzkrLTY+DSdOCjqJGb/Tk9raaHs5O/0+QM32s/Bz2m/g0/6f9E/p2BkvT8k/px91cs77IGf/AE5X+n54NJ0rBX2AM56fJPYND2Cez8YAzVRhlHp+XwaToxkq6OAMz+nLKngedGDntBJL2Ec9lfge9ontfoIZ0q/0VdfHRouhNlXSusBLPVf6Le1+hz2MM77ICEq/0V2foflT8fJX2EuyAn7f6KuvGeB90lZUkhHZx0WUUMyq4KKprgAGxZ6I4pLoP7bOe0At8nGv0NKo66eAaUxkjr56GXVt+CuxgL+0mdVeV+w+15O7MLlBMpJxw3k5tGXWsk9pBsXikW2hvaObQP0PqG0vwZeoeGzS1NiMjVSzk5eOWnVI6nkTsaxgateWJzT3M6ZHLfoeP0Vlh9BJL5KNfKJVVUSYR3BMAcwkc2v8FsF8cIAW1/gji/wFwTHAAU8/ojzjhFnHkttApFN/AVRWOTmDuAJtX6I4o5hnUgBOL/BNr/AXBzDAHtf4LF8HNoFCFthNgHMEwE2k2gDS5LY/Rbbho7gCmP0TH6L4JgCmP0TH6L4JgCmP0Tb+i+CYAooE24+C/RGgKrBJRyVivjIXHGQF5IBZFDbWci1iXJfkpOyK5QtOCaG5oXmuzVVnXx7ErI9mhqFyxKxcPHIRrNvjznArYvkc1GeeBSa4yWiQO1yBnDL6DPlnJZ+CQAh1p5I0BwmEdwRdgErQ3U+hWtDda64IodqXCHqmJ0rhDdfZnV+TdUd0kNwiL6cdrjliF";

const packages = [
  {
    name: "First Step Intensive",
    subtitle: "For leaders who know something needs to change, but need the right place to begin.",
    example:
      "Best when things feel messy, important work is getting stuck, and you need someone to help name the real issue and map the smartest first move.",
    bullets: [
      "Focused diagnosis of what is slowing the work down",
      "Clear priorities for what to address first",
      "Strategic recommendations shaped to your actual team",
    ],
  },
  {
    name: "Operational Reset",
    subtitle: "For teams that need stronger structure, cleaner workflows, and more trust in how work moves.",
    example:
      "Best when your team has grown, the work has gotten more complex, and your current systems no longer match how people actually need to work.",
    bullets: [
      "Workflow and ownership redesign",
      "Meeting rhythm, handoff, and decision support",
      "Systems that fit the real texture of the work",
    ],
  },
  {
    name: "Strategic Operations Retainer",
    subtitle: "For leaders who want ongoing partnership as they refine, scale, and lead through change.",
    example:
      "Ideal after implementation, when you need someone to maintain the system, refine it, or step in as a fractional operations partner.",
    bullets: [
      "Ongoing strategic thought partnership",
      "Implementation support and refinement",
      "A calmer, more intentional operational backbone",
    ],
  },
];

const outcomes = [
  "More clarity about what to do first",
  "Systems that support people instead of straining them",
  "Less friction across teams and handoffs",
  "Operational structure your team can actually sustain",
];

const quotes = [
  {
    text: "You are great at turning my thoughts and dreams into actions and processes.",
    name: "Paul Penniman",
    org: "The Penniman Foundation",
  },
  {
    text: "I didn’t know that a workflow could make that much of a difference!",
    name: "Stephen G",
    org: "Ellsworth, LLC",
  },
  {
    text: "I can’t believe all the money you’re about to make me!",
    name: "Erick B",
    org: "Burke DMV Properties",
  },
];

const process = [
  {
    step: "01",
    title: "Listen for the real issue",
    body: "We pay attention to where the friction actually lives, not just where it shows up. That means understanding the people, the pressures, and the mission before prescribing anything.",
  },
  {
    step: "02",
    title: "Shape the right structure",
    body: "We design workflows, roles, rhythms, and tools that fit the organization you actually have, so the solution feels usable instead of imposed.",
  },
  {
    step: "03",
    title: "Create room for the work",
    body: "The goal is not more process for its own sake. The goal is a better environment for people to think clearly, move well, and carry the mission with more ease.",
  },
];

const engagements = [
  {
    label: "Strategy",
    name: "Operational Reset",
    price: "Starting at $7,500",
    body: "Best for organizations that need a stronger operating structure, clearer ownership, and a more functional internal rhythm.",
  },
  {
    label: "Systems",
    name: "Workflow & Process Design",
    price: "Starting at $5,000",
    body: "Best when work is getting stuck in handoffs, approvals, or unclear systems and you need a cleaner path forward.",
  },
  {
    label: "Support",
    name: "Strategic Advisory",
    price: "Starting at $3,000/month",
    body: "Best for leaders who want ongoing thought partnership, decision support, and a steady operations mind in the room.",
  },
];

const paidCall = {
  name: "First Step Call",
  price: "$95",
  duration: "20 minutes",
  body: "A focused session for founders, executives, and teams who know something in the work is not flowing the way it should, but need help naming the issue and identifying the smartest next move.",
  bullets: [
    "A clearer read on what is actually stuck",
    "Insight into where the friction is coming from",
    "Guidance on what to address first",
    "A better sense of whether you need a larger engagement or just a sharper next step",
  ],
};

function IntroOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="intro-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="intro-center"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.35em" }}
              animate={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="intro-kicker"
            >
              SoftPowerWorks
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="intro-title display"
            >
              Systems that fit people.
            </motion.h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="intro-line"
            />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{
              duration: 0.95,
              delay: 1.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="intro-slide"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Operational Reset",
    budget: "",
    timeline: "",
    details: "",
  });

  const inquiryHref = useMemo(() => {
    const subject = encodeURIComponent(
      `SoftPowerWorks Inquiry${
        formData.organization ? ` - ${formData.organization}` : ""
      }`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nInquiry Type: ${formData.inquiryType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.details}`
    );
    return `mailto:admin@softpowerworks.org?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell">
      <IntroOverlay show={showIntro} />

      <section className="hero">
        <motion.div
          className="hero-panel"
          animate={{ x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-line"
          animate={{ height: [80, 120, 80], opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container site-nav-wrap">
          <div className="site-nav">
            <div>
              <div className="brand display">SoftPowerWorks</div>
              <div className="brand-subtitle">
                Strategic operations for people-centered teams
              </div>
            </div>
            <div className="nav-links">
              <a href="#strategy">Strategy</a>
              <a href="#systems">Systems</a>
              <a href="#support">Support</a>
            </div>
          </div>
        </div>

        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="kicker">
              <Sparkles className="kicker-icon" />
              Systems that fit people, support mission, and create room to work
              well
            </div>

            <h1 className="hero-title display">
              SoftPowerWorks helps leaders build systems that strengthen teams
              and make the mission easier to carry.
            </h1>

            <p className="hero-body">
              SoftPowerWorks is a strategic consulting firm for founders,
              executives, and mission-driven organizations that need better ways
              of working. We help teams create workflows, operating rhythms, and
              structures that fit the real shape of the work so people can move
              with more clarity, less friction, and greater trust.
            </p>

            <div className="button-row">
              <a className="button button-primary" href="#support">
                Start a strategic conversation
                <ArrowRight className="button-icon" />
              </a>
              <a className="button button-secondary" href="#systems">
                Explore the work
              </a>
            </div>

            <div className="outcomes-grid">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="outcome-item"
                >
                  <div className="outcome-row">
                    <Check className="check-icon" />
                    <p>{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hero-card-wrap"
          >
            <div className="feature-grid">
              <div className="feature-grid-inner">
                <div
                  className="portrait-wrap"
                  style={{
                    minHeight: "170px",
                    maxHeight: "170px",
                    background: "#111111",
                  }}
                >
                  <motion.img
                    src={founderImage}
                    alt="Mia Carr"
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "contain",
                      objectPosition: "center top",
                      display: "block",
                      background: "#111111",
                      paddingTop: "0.25rem",
                    }}
                  />
                  <div
                    className="portrait-caption"
                    style={{
                      padding: "0.5rem",
                      background: "rgba(0,0,0,0.75)",
                    }}
                  >
                    <p className="portrait-kicker">Founder</p>
                    <p
                      className="portrait-name display"
                      style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}
                    >
                      Mia Carr
                    </p>
                  </div>
                </div>

                <div className="sidebar-panel">
                  <div className="sidebar-heading">
                    <p className="sidebar-kicker">Who this is for</p>
                    <p className="sidebar-title display">
                      Leaders who know the work can run better
                    </p>
                  </div>
                  <motion.div
                    className="sidebar-body"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p>
                      SoftPowerWorks is for leaders who can feel the drag in the
                      work, even if they have not fully named the problem yet.
                    </p>
                    <p>
                      It is especially useful for founder-led firms,
                      consultancies, nonprofits, and high-accountability teams
                      that need stronger ways of working without making the
                      organization feel heavier.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="systems" className="section alt">
        <div className="container">
          <div className="two-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Proof</SectionLabel>
              <h2 className="section-title display">
                Clients should be able to feel the difference in how the work
                moves.
              </h2>
              <p className="section-body max-text">
                These responses reflect what happens when the right structure is
                in place. The work gets clearer, lighter, and more effective.
              </p>
            </motion.div>

            <div className="quote-grid">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                  animate={{
                    y: index === 1 ? [0, 6, 0] : [0, -4, 0],
                  }}
                  className="panel"
                >
                  <p className="quote-text display">“{quote.text}”</p>
                  <p className="quote-meta">
                    {quote.name}, {quote.org}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="section">
        <div className="container">
          <div className="two-col strategy-cols">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Approach</SectionLabel>
              <h2 className="section-title display">
                The job is not to force a system into place. The job is to build
                one that fits.
              </h2>
              <p className="section-body">
                SoftPowerWorks starts by understanding where friction is
                actually coming from. From there, we build structures,
                workflows, and rhythms that support the people doing the work
                and make the mission easier to carry.
              </p>
            </motion.div>

            <div className="process-grid">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ x: 8 }}
                  className="panel process-panel"
                >
                  <div className="process-step">{item.step}</div>
                  <div>
                    <h3 className="process-title display">{item.title}</h3>
                    <p className="process-body">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="engagements-grid">
            {engagements.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="panel"
              >
                <p className="engagement-label">{item.label}</p>
                <p className="engagement-name display">{item.name}</p>
                <p className="engagement-price">{item.price}</p>
                <p className="engagement-body">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="packages-header">
            <div>
              <SectionLabel>Packages</SectionLabel>
              <h2 className="section-title display">
                Different levels of support for different stages of the work.
              </h2>
            </div>
            <p className="packages-summary">
              Start with a focused engagement, move into a deeper reset, or
              bring SoftPowerWorks in for ongoing support once the systems are
              in motion.
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="panel"
              >
                <p className="package-title display">{pkg.name}</p>
                <p className="package-subtitle">{pkg.subtitle}</p>
                <p className="package-example">{pkg.example}</p>
                <div className="package-bullets">
                  {pkg.bullets.map((bullet) => (
                    <div key={bullet} className="bullet-row">
                      <div className="bullet-dot" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="section">
        <div className="container">
          <div className="support-top-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel"
            >
              <SectionLabel>Paid call</SectionLabel>
              <h2 className="section-title display">{paidCall.name}</h2>
              <div className="paid-meta">
                <span>{paidCall.price}</span>
                <span className="paid-sep" />
                <span>{paidCall.duration}</span>
              </div>
              <p className="section-body">{paidCall.body}</p>
              <div className="package-bullets paid-bullets">
                {paidCall.bullets.map((bullet) => (
                  <div key={bullet} className="bullet-row">
                    <div className="bullet-dot" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="paid-actions">
                <a
                  href="https://cal.com/softpowerworks/20min"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary full-width"
                >
                  Book the First Step Call
                  <ArrowRight className="button-icon" />
                </a>
                <p className="muted-note">
                  Paid access for people who want focused insight before
                  deciding whether a larger engagement makes sense. Booking and
                  payment happen through Cal.com.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.06 }}
              className="panel panel-dark"
            >
              <SectionLabel>Inquiry</SectionLabel>
              <h2 className="section-title display">Start here.</h2>
              <p className="section-body">
                Share a little about what is happening in your organization and
                what kind of support you think you may need. This form opens a
                prefilled inquiry email to admin@softpowerworks.org.
              </p>

              <div className="form-grid">
                <div className="form-two">
                  <div>
                    <label className="field-label">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="field-label">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="form-two">
                  <div>
                    <label className="field-label">Organization</label>
                    <input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <label className="field-label">Type of support</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="field"
                    >
                      <option>First Step Intensive</option>
                      <option>Operational Reset</option>
                      <option>Workflow & Process Design</option>
                      <option>Strategic Operations Retainer</option>
                      <option>Strategic Advisory</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-two">
                  <div>
                    <label className="field-label">Budget</label>
                    <input
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Budget range"
                    />
                  </div>
                  <div>
                    <label className="field-label">Timeline</label>
                    <input
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="When do you want to start?"
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label">What is going on?</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={6}
                    className="field textarea"
                    placeholder="Tell me what feels stuck, what is changing, or what kind of support you need."
                  ></textarea>
                </div>
              </div>

              <div className="paid-actions">
                <a href={inquiryHref} className="button button-primary full-width">
                  Send inquiry
                  <ArrowRight className="button-icon" />
                </a>
                <p className="muted-note">
                  I do not offer free consultation calls through the site.
                  Inquiry happens here first.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="support-bottom-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel"
            >
              <SectionLabel>Support</SectionLabel>
              <h2 className="section-title display">
                Soft power means creating the conditions for people and teams to
                do their best work.
              </h2>
              <p className="section-body">
                SoftPowerWorks helps organizations create systems that feel
                considered, usable, and human. We are brought in when the
                mission is strong, the vision is clear, and the team needs more
                support around how the work is carried.
              </p>
              <p className="section-body">
                Our work sits at the intersection of strategy, operations, and
                executive support. We care about what gets built, how it feels
                to carry, and whether it gives leaders and teams more room to
                contribute well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="panel panel-dark"
            >
              <SectionLabel>Contact</SectionLabel>
              <h2 className="contact-title display">Let’s talk.</h2>
              <p className="section-body">
                If you know the work could be running better, this is the place
                to start. SoftPowerWorks offers focused advisory, project-based
                consulting, and ongoing strategic operations support.
              </p>
              <div className="contact-stack">
                <div className="contact-row">
                  <Mail className="contact-icon" />
                  <span>admin@softpowerworks.org</span>
                </div>
                <div className="contact-note">
                  Selective engagements for founders, executives, and
                  mission-driven teams.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
