import React, { useRef, useEffect } from "react";
import * as d3 from "d3";



const data = [
    { year: 1835, France: 2669460, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 8997 },
    { year: 1836, France: 3139583, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 9715 },
    { year: 1837, France: 3834476, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 10536 },
    { year: 1838, France: 2547320, Italy: 0, Portugal: 308900, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 10427 },
    { year: 1839, France: 2676487, Italy: 0, Portugal: 295700, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 472, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 10999 },
    { year: 1840, France: 2792689, Italy: 0, Portugal: 386800, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 9212 },
    { year: 1841, France: 3394148, Italy: 0, Portugal: 295700, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 12404 },
    { year: 1842, France: 3460890, Italy: 0, Portugal: 318200, Spain: 0, Germany: 204035, Australia: 0, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 10650 },
    { year: 1843, France: 1923134, Italy: 0, Portugal: 333400, Spain: 0, Germany: 0, Australia: 131, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 7814 },
    { year: 1844, France: 2948162, Italy: 0, Portugal: 318200, Spain: 0, Germany: 0, Australia: 137, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 9552 },
    { year: 1845, France: 3035598, Italy: 0, Portugal: 395500, Spain: 0, Germany: 0, Australia: 228, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 9985 },
    { year: 1846, France: 3270486, Italy: 0, Portugal: 453100, Spain: 0, Germany: 288000, Australia: 274, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 11365 },
    { year: 1847, France: 5472236, Italy: 0, Portugal: 0, Spain: 0, Germany: 294000, Australia: 336, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 11365 },
    { year: 1848, France: 5200932, Italy: 0, Portugal: 422000, Spain: 0, Germany: 298000, Australia: 347, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 6285 },
    { year: 1849, France: 3582267, Italy: 0, Portugal: 256800, Spain: 0, Germany: 218000, Australia: 556, NewZealand: 0, UnitedStates: 825, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 12159 },
    { year: 1850, France: 4560550, Italy: 0, Portugal: 326700, Spain: 0, Germany: 169000, Australia: 582, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 12159 },
    { year: 1851, France: 3972495, Italy: 0, Portugal: 439500, Spain: 0, Germany: 107000, Australia: 689, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 12159 },
    { year: 1852, France: 2885077, Italy: 0, Portugal: 399900, Spain: 0, Germany: 165000, Australia: 565, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 10297 },
    { year: 1853, France: 2283168, Italy: 0, Portugal: 269400, Spain: 0, Germany: 163000, Australia: 578, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 14453 },
    { year: 1854, France: 1090518, Italy: 0, Portugal: 216700, Spain: 0, Germany: 42000, Australia: 483, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 2549, SouthAfrica: 14077 },
    { year: 1855, France: 1528881, Italy: 0, Portugal: 149600, Spain: 0, Germany: 105000, Australia: 486, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 1501, SouthAfrica: 14413 },
    { year: 1856, France: 2145371, Italy: 0, Portugal: 65600, Spain: 0, Germany: 102000, Australia: 894, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 14413 },
    { year: 1857, France: 3567558, Italy: 0, Portugal: 42300, Spain: 0, Germany: 196000, Australia: 941, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 0, SouthAfrica: 14413 },
    { year: 1858, France: 5432339, Italy: 0, Portugal: 208800, Spain: 0, Germany: 359000, Australia: 1159, NewZealand: 0, UnitedStates: 0, Argentina: 0, Chile: 0, Algeria: 3857, SouthAfrica: 14413 },
    { year: 1859, France: 3011518, Italy: 0, Portugal: 88400, Spain: 0, Germany: 319000, Australia: 1119, NewZealand: 0, UnitedStates: 6124, Argentina: 0, Chile: 0, Algeria: 4949, SouthAfrica: 14413 },
    { year: 1860, France: 3985514, Italy: 1730000, Portugal: 79300, Spain: 1224801, Germany: 172000, Australia: 1341, NewZealand: 0, UnitedStates: 6770, Argentina: 3624, Chile: 25126, Algeria: 7825, SouthAfrica: 14396 },
    { year: 1861, France: 3000662, Italy: 1730000, Portugal: 111100, Spain: 1278712, Germany: 109000, Australia: 1927, NewZealand: 4, UnitedStates: 7416, Argentina: 3729, Chile: 25126, Algeria: 3668, SouthAfrica: 14510 },
    { year: 1862, France: 3738796, Italy: 1738537, Portugal: 115800, Spain: 1332623, Germany: 253000, Australia: 2762, NewZealand: 7, UnitedStates: 8062, Argentina: 3837, Chile: 27745, Algeria: 4323, SouthAfrica: 14520 },
    { year: 1863, France: 5175717, Italy: 1738873, Portugal: 172600, Spain: 1386534, Germany: 248000, Australia: 3833, NewZealand: 11, UnitedStates: 8708, Argentina: 3948, Chile: 21329, Algeria: 7046, SouthAfrica: 14580 },
    { year: 1864, France: 5103332, Italy: 1708741, Portugal: 149900, Spain: 1440445, Germany: 110000, Australia: 4803, NewZealand: 14, UnitedStates: 9354, Argentina: 4062, Chile: 27684, Algeria: 6383, SouthAfrica: 14287 },
    { year: 1865, France: 6946000, Italy: 1829807, Portugal: 215100, Spain: 1494356, Germany: 165000, Australia: 5052, NewZealand: 18, UnitedStates: 10000, Argentina: 4180, Chile: 22165, Algeria: 7819, SouthAfrica: 14709 },
    { year: 1866, France: 6431679, Italy: 2173405, Portugal: 215700, Spain: 1548267, Germany: 300000, Australia: 5387, NewZealand: 21, UnitedStates: 10000, Argentina: 4301, Chile: 21742, Algeria: 9911, SouthAfrica: 14709 },
    { year: 1867, France: 3942146, Italy: 2145163, Portugal: 150000, Spain: 1602178, Germany: 296000, Australia: 6323, NewZealand: 25, UnitedStates: 10000, Argentina: 4425, Chile: 28618, Algeria: 7641, SouthAfrica: 14709 },
    { year: 1868, France: 5248874, Italy: 2124539, Portugal: 179700, Spain: 1656089, Germany: 444000, Australia: 7080, NewZealand: 28, UnitedStates: 10000, Argentina: 4554, Chile: 23809, Algeria: 11461, SouthAfrica: 16410 },
    { year: 1869, France: 7052500, Italy: 2284411, Portugal: 187700, Spain: 1710000, Germany: 209000, Australia: 7998, NewZealand: 32, UnitedStates: 16067, Argentina: 4685, Chile: 22897, Algeria: 12688, SouthAfrica: 14510 },
    { year: 1870, France: 5494401, Italy: 2415184, Portugal: 279300, Spain: 1710000, Germany: 104392, Australia: 8366, NewZealand: 35, UnitedStates: 17307, Argentina: 4830, Chile: 20582, Algeria: 12709, SouthAfrica: 14510 },
    { year: 1871, France: 5864876, Italy: 2525964, Portugal: 211500, Spain: 1763911, Germany: 84899, Australia: 8292, NewZealand: 39, UnitedStates: 18547, Argentina: 4980, Chile: 26186, Algeria: 18473, SouthAfrica: 14510 },
    { year: 1872, France: 5169555, Italy: 2613722, Portugal: 167800, Spain: 1817822, Germany: 37561, Australia: 8215, NewZealand: 42, UnitedStates: 25708, Argentina: 5134, Chile: 32407, Algeria: 22784, SouthAfrica: 14709 },
    { year: 1873, France: 3681305, Italy: 2163664, Portugal: 269200, Spain: 1871733, Germany: 89082, Australia: 7992, NewZealand: 46, UnitedStates: 32173, Argentina: 5300, Chile: 32144, Algeria: 17068, SouthAfrica: 10165 },
    { year: 1874, France: 6532394, Italy: 1986974, Portugal: 209461, Spain: 1925644, Germany: 179578, Australia: 8459, NewZealand: 49, UnitedStates: 38955, Argentina: 6128, Chile: 24685, Algeria: 22900, SouthAfrica: 10165 },
    { year: 1875, France: 8652437, Italy: 2364061, Portugal: 219756, Spain: 1979555, Germany: 244040, Australia: 9400, NewZealand: 53, UnitedStates: 46366, Argentina: 7085, Chile: 29660, Algeria: 19631, SouthAfrica: 20545 },
    { year: 1876, France: 4318788, Italy: 2508064, Portugal: 227045, Spain: 2034453, Germany: 220373, Australia: 10875, NewZealand: 56, UnitedStates: 53304, Argentina: 8192, Chile: 26645, Algeria: 22244, SouthAfrica: 22271 },
    { year: 1877, France: 5799757, Italy: 2244002, Portugal: 218651, Spain: 1998480, Germany: 129083, Australia: 7698, NewZealand: 60, UnitedStates: 60166, Argentina: 9471, Chile: 24953, Algeria: 26517, SouthAfrica: 23998 },
    { year: 1878, France: 5020856, Italy: 2264448, Portugal: 217243, Spain: 1962704, Germany: 193740, Australia: 7676, NewZealand: 63, UnitedStates: 62241, Argentina: 10951, Chile: 24707, Algeria: 33822, SouthAfrica: 25724 },
    { year: 1879, France: 2627525, Italy: 2471320, Portugal: 225068, Spain: 2448138, Germany: 67757, Australia: 7542, NewZealand: 67, UnitedStates: 69023, Argentina: 12661, Chile: 21822, Algeria: 35153, SouthAfrica: 21941 },
    { year: 1880, France: 3010805, Italy: 2484313, Portugal: 245265, Spain: 2340220, Germany: 31200, Australia: 9516, NewZealand: 70, UnitedStates: 81854, Argentina: 14639, Chile: 19909, Algeria: 43258, SouthAfrica: 26100 },
    { year: 1881, France: 3547228, Italy: 2671863, Portugal: 224277, Spain: 2156360, Germany: 159248, Australia: 7603, NewZealand: 74, UnitedStates: 65253, Argentina: 16925, Chile: 23221, Algeria: 28870, SouthAfrica: 30264 },
    { year: 1882, France: 3188687, Italy: 2632449, Portugal: 281243, Spain: 2046444, Germany: 83113, Australia: 8819, NewZealand: 77, UnitedStates: 66616, Argentina: 19569, Chile: 28806, Algeria: 68134, SouthAfrica: 27179 },
    { year: 1883, France: 3731465, Italy: 2986122, Portugal: 252618, Spain: 2358403, Germany: 179475, Australia: 6996, NewZealand: 81, UnitedStates: 55481, Argentina: 22626, Chile: 39443, Algeria: 82160, SouthAfrica: 29100 },
    { year: 1884, France: 3583994, Italy: 3006399, Portugal: 325776, Spain: 2198328, Germany: 217165, Australia: 8929, NewZealand: 84, UnitedStates: 54883, Argentina: 26160, Chile: 33542, Algeria: 89090, SouthAfrica: 31021 },
    { year: 1885, France: 3026874, Italy: 2584018, Portugal: 453156, Spain: 2050000, Germany: 221144, Australia: 8247, NewZealand: 88, UnitedStates: 63085, Argentina: 30246, Chile: 29968, Algeria: 101830, SouthAfrica: 32620 },
    { year: 1886, France: 2592374, Italy: 2764224, Portugal: 484235, Spain: 2361800, Germany: 82758, Australia: 9846, NewZealand: 91, UnitedStates: 60560, Argentina: 34971, Chile: 28818, Algeria: 156849, SouthAfrica: 34220 },
    { year: 1887, France: 2526565, Italy: 3205084, Portugal: 509188, Spain: 2301300, Germany: 164013, Australia: 10641, NewZealand: 95, UnitedStates: 93365, Argentina: 40433, Chile: 31659, Algeria: 190246, SouthAfrica: 35822 },
    { year: 1888, France: 3149088, Italy: 3170248, Portugal: 473092, Spain: 2786100, Germany: 169703, Australia: 13127, NewZealand: 98, UnitedStates: 90840, Argentina: 46749, Chile: 35228, Algeria: 272837, SouthAfrica: 25724 },
    { year: 1889, France: 2409837, Italy: 3117008, Portugal: 437413, Spain: 2987600, Germany: 132097, Australia: 13165, NewZealand: 102, UnitedStates: 97150, Argentina: 54051, Chile: 35534, Algeria: 251220, SouthAfrica: 25899 },
    { year: 1890, France: 2854215, Italy: 2825415, Portugal: 401735, Spain: 2435100, Germany: 205439, Australia: 15525, NewZealand: 105, UnitedStates: 79788, Argentina: 62494, Chile: 39438, Algeria: 284413, SouthAfrica: 21476 },
    { year: 1891, France: 3065786, Italy: 2958221, Portugal: 366056, Spain: 2427100, Germany: 45620, Australia: 18128, NewZealand: 109, UnitedStates: 83414, Argentina: 72255, Chile: 37725, Algeria: 405841, SouthAfrica: 27354 },
    { year: 1892, France: 3003343, Italy: 3362775, Portugal: 329440, Spain: 2994100, Germany: 94045, Australia: 15527, NewZealand: 112, UnitedStates: 95885, Argentina: 83541, Chile: 43950, Algeria: 286687, SouthAfrica: 24386 },
    { year: 1893, France: 5176608, Italy: 3458027, Portugal: 310781, Spain: 2161600, Germany: 249957, Australia: 15992, NewZealand: 116, UnitedStates: 78297, Argentina: 96591, Chile: 38952, Algeria: 393713, SouthAfrica: 27936 },
    { year: 1894, France: 4006778, Italy: 3439758, Portugal: 292123, Spain: 2179000, Germany: 210235, Australia: 18131, NewZealand: 119, UnitedStates: 95866, Argentina: 111678, Chile: 41586, Algeria: 364248, SouthAfrica: 20719 },
    { year: 1895, France: 2734743, Italy: 3269798, Portugal: 321990, Spain: 2138300, Germany: 155194, Australia: 20625, NewZealand: 123, UnitedStates: 67986, Argentina: 129194, Chile: 44708, Algeria: 379769, SouthAfrica: 24677 },
    { year: 1896, France: 4641921, Italy: 3248365, Portugal: 351990, Spain: 1512897, Germany: 362267, Australia: 22409, NewZealand: 126, UnitedStates: 62634, Argentina: 133978, Chile: 48402, Algeria: 434653, SouthAfrica: 25841 },
    { year: 1897, France: 3347243, Italy: 3181065, Portugal: 381990, Spain: 1541059, Germany: 189650, Australia: 23337, NewZealand: 130, UnitedStates: 57600, Argentina: 136364, Chile: 52774, Algeria: 436776, SouthAfrica: 20021 },
    { year: 1898, France: 3304029, Italy: 3168476, Portugal: 411990, Spain: 2000403, Germany: 89100, Australia: 18590, NewZealand: 133, UnitedStates: 133081, Argentina: 130000, Chile: 57953, Algeria: 522170, SouthAfrica: 25724 },
    { year: 1899, France: 4895048, Italy: 3109378, Portugal: 466648, Spain: 2114799, Germany: 110000, Australia: 17856, NewZealand: 137, UnitedStates: 72063, Argentina: 120000, Chile: 64104, Algeria: 464801, SouthAfrica: 25783 },
    { year: 1900, France: 6892336, Italy: 3164315, Portugal: 521306, Spain: 2282256, Germany: 130000, Australia: 14919, NewZealand: 140, UnitedStates: 91790, Argentina: 115100, Chile: 71430, Algeria: 544418, SouthAfrica: 21476 },
    { year: 1901, France: 5920023, Italy: 3167581, Portugal: 575965, Spain: 2239864, Germany: 150000, Australia: 25493, NewZealand: 144, UnitedStates: 93395, Argentina: 184400, Chile: 80407, Algeria: 556303, SouthAfrica: 21936 },
    { year: 1902, France: 4088950, Italy: 3328286, Portugal: 490385, Spain: 1218373, Germany: 176911, Australia: 26440, NewZealand: 147, UnitedStates: 91408, Argentina: 136000, Chile: 81046, Algeria: 366611, SouthAfrica: 21936 },
    { year: 1903, France: 3649636, Italy: 3476943, Portugal: 350406, Spain: 1485030, Germany: 295719, Australia: 23576, NewZealand: 151, UnitedStates: 169190, Argentina: 189200, Chile: 93480, Algeria: 597368, SouthAfrica: 21941 },
    { year: 1904, France: 6763790, Italy: 3432111, Portugal: 376131, Spain: 2185558, Germany: 311820, Australia: 28459, NewZealand: 154, UnitedStates: 118565, Argentina: 174100, Chile: 114843, Algeria: 791558, SouthAfrica: 26015 },
    { year: 1905, France: 5821036, Italy: 3393131, Portugal: 401855, Spain: 1770378, Germany: 273672, Australia: 26603, NewZealand: 158, UnitedStates: 126608, Argentina: 183800, Chile: 117056, Algeria: 774035, SouthAfrica: 20835 },
    { year: 1906, France: 5311889, Italy: 3417441, Portugal: 503245, Spain: 1357475, Germany: 98649, Australia: 25412, NewZealand: 161, UnitedStates: 106824, Argentina: 242600, Chile: 80790, Algeria: 690572, SouthAfrica: 15656 },
    { year: 1907, France: 6737328, Italy: 3573708, Portugal: 604635, Spain: 1838434, Germany: 168441, Australia: 27008, NewZealand: 165, UnitedStates: 150075, Argentina: 262100, Chile: 91448, Algeria: 860123, SouthAfrica: 27121 },
    { year: 1908, France: 6238230, Italy: 3866658, Portugal: 728764, Spain: 1855672, Germany: 200891, Australia: 20230, NewZealand: 168, UnitedStates: 180355, Argentina: 283800, Chile: 63566, Algeria: 700373, SouthAfrica: 27587 },
    { year: 1909, France: 5529076, Italy: 3985403, Portugal: 660503, Spain: 1471621, Germany: 158407, Australia: 25075, NewZealand: 172, UnitedStates: 158497, Argentina: 233800, Chile: 94931, Algeria: 822872, SouthAfrica: 21710 },
    { year: 1910, France: 2889544, Italy: 4073239, Portugal: 592242, Spain: 1128343, Germany: 69464, Australia: 20923, NewZealand: 175, UnitedStates: 178027, Argentina: 339600, Chile: 99927, Algeria: 841365, SouthAfrica: 34100 },
    { year: 1911, France: 4597146, Italy: 3509037, Portugal: 523981, Spain: 1474705, Germany: 217362, Australia: 26667, NewZealand: 179, UnitedStates: 178652, Argentina: 378100, Chile: 142617, Algeria: 883368, SouthAfrica: 36843 },
    { year: 1912, France: 6019877, Italy: 3449278, Portugal: 514899, Spain: 1646506, Germany: 165018, Australia: 22617, NewZealand: 182, UnitedStates: 212149, Argentina: 426000, Chile: 151032, Algeria: 667118, SouthAfrica: 39586 },
    { year: 1913, France: 4468188, Italy: 3647072, Portugal: 505816, Spain: 1710520, Germany: 82611, Australia: 27748, NewZealand: 366, UnitedStates: 180079, Argentina: 498900, Chile: 138380, Algeria: 743173, SouthAfrica: 42329 },
    { year: 1914, France: 6045053, Italy: 4783870, Portugal: 496733, Spain: 1616794, Germany: 77637, Australia: 21411, NewZealand: 408, UnitedStates: 180768, Argentina: 515100, Chile: 129985, Algeria: 1031700, SouthAfrica: 45071 },
    { year: 1915, France: 2094194, Italy: 2121653, Portugal: 487216, Spain: 878998, Germany: 231088, Australia: 13071, NewZealand: 396, UnitedStates: 170003, Argentina: 394000, Chile: 121866, Algeria: 513902, SouthAfrica: 47814 },
    { year: 1916, France: 3643693, Italy: 4336875, Portugal: 413149, Spain: 2339607, Germany: 92687, Australia: 26763, NewZealand: 386, UnitedStates: 117626, Argentina: 440600, Chile: 114422, Algeria: 878127, SouthAfrica: 50557 },
    { year: 1917, France: 3863521, Italy: 5416680, Portugal: 404814, Spain: 2376262, Germany: 183457, Australia: 23304, NewZealand: 371, UnitedStates: 152770, Argentina: 513300, Chile: 158985, Algeria: 623307, SouthAfrica: 53300 },
    { year: 1918, France: 4549218, Italy: 4063448, Portugal: 392609, Spain: 2256762, Germany: 225077, Australia: 31209, NewZealand: 359, UnitedStates: 147184, Argentina: 452900, Chile: 155492, Algeria: 634310, SouthAfrica: 57100 },
    { year: 1919, France: 5510000, Italy: 3888225, Portugal: 513338, Spain: 2052468, Germany: 174126, Australia: 39518, NewZealand: 347, UnitedStates: 132589, Argentina: 457500, Chile: 123436, Algeria: 778337, SouthAfrica: 70600 },
    { year: 1920, France: 5860000, Italy: 4706631, Portugal: 338362, Spain: 2677107, Germany: 244015, Australia: 34774, NewZealand: 335, UnitedStates: 76019, Argentina: 513400, Chile: 124180, Algeria: 704122, SouthAfrica: 77000 },
    { year: 1921, France: 4790000, Italy: 3520787, Portugal: 460705, Spain: 1920430, Germany: 175492, Australia: 50071, NewZealand: 322, UnitedStates: 77722, Argentina: 615500, Chile: 126263, Algeria: 500211, SouthAfrica: 60600 },
    { year: 1922, France: 7680000, Italy: 3926514, Portugal: 579390, Spain: 2567187, Germany: 340619, Australia: 38835, NewZealand: 310, UnitedStates: 24064, Argentina: 515500, Chile: 149192, Algeria: 747309, SouthAfrica: 60900 },
    { year: 1923, France: 5990000, Italy: 5932454, Portugal: 613120, Spain: 2207826, Germany: 82145, Australia: 51951, NewZealand: 298, UnitedStates: 55669, Argentina: 543500, Chile: 169059, Algeria: 1018636, SouthAfrica: 34100 },
    { year: 1924, France: 7090000, Italy: 4917026, Portugal: 580907, Spain: 2174466, Germany: 180395, Australia: 66662, NewZealand: 285, UnitedStates: 34281, Argentina: 546300, Chile: 164702, Algeria: 978720, SouthAfrica: 55413 },
    { year: 1925, France: 6510000, Italy: 4988834, Portugal: 548695, Spain: 2669759, Germany: 159094, Australia: 60459, NewZealand: 273, UnitedStates: 13771, Argentina: 663500, Chile: 122811, Algeria: 1236612, SouthAfrica: 61100 },
    { year: 1926, France: 4260000, Italy: 4077105, Portugal: 366009, Spain: 1575354, Germany: 98934, Australia: 73787, NewZealand: 346, UnitedStates: 22111, Argentina: 528200, Chile: 152400, Algeria: 837914, SouthAfrica: 58400 },
    { year: 1927, France: 5120000, Italy: 3920293, Portugal: 926706, Spain: 2832519, Germany: 142762, Australia: 92995, NewZealand: 386, UnitedStates: 16682, Argentina: 464900, Chile: 308497, Algeria: 803150, SouthAfrica: 67770 },
    { year: 1928, France: 6030000, Italy: 5148901, Portugal: 452468, Spain: 2176345, Germany: 205281, Australia: 78658, NewZealand: 421, UnitedStates: 18636, Argentina: 765600, Chile: 345145, Algeria: 1366662, SouthAfrica: 83484 },
    { year: 1929, France: 6500000, Italy: 4630183, Portugal: 660078, Spain: 2459339, Germany: 201943, Australia: 84557, NewZealand: 456, UnitedStates: 43086, Argentina: 836800, Chile: 327797, Algeria: 1283243, SouthAfrica: 84593 },
    { year: 1930, France: 4560000, Italy: 4203871, Portugal: 578470, Spain: 1798312, Germany: 280874, Australia: 73050, NewZealand: 491, UnitedStates: 11943, Argentina: 573400, Chile: 320197, Algeria: 1356139, SouthAfrica: 94498 },
    { year: 1931, France: 5930000, Italy: 3805069, Portugal: 741042, Spain: 1907408, Germany: 283954, Australia: 59454, NewZealand: 526, UnitedStates: 25207, Argentina: 558500, Chile: 242482, Algeria: 1585667, SouthAfrica: 86870 },
    { year: 1932, France: 4960000, Italy: 4907868, Portugal: 614987, Spain: 2118767, Germany: 172170, Australia: 64510, NewZealand: 561, UnitedStates: 19722, Argentina: 218700, Chile: 241112, Algeria: 1831489, SouthAfrica: 108211 },
    { year: 1933, France: 5180000, Italy: 3469376, Portugal: 900038, Spain: 1976374, Germany: 179854, Australia: 74635, NewZealand: 596, UnitedStates: 71000, Argentina: 734700, Chile: 325553, Algeria: 1673096, SouthAfrica: 106081 },
    { year: 1934, France: 7810000, Italy: 3139676, Portugal: 1080472, Spain: 2171876, Germany: 452483, Australia: 63726, NewZealand: 631, UnitedStates: 154642, Argentina: 754800, Chile: 292507, Algeria: 2204277, SouthAfrica: 117822 },
    { year: 1935, France: 7610000, Italy: 4746771, Portugal: 593456, Spain: 1703718, Germany: 417447, Australia: 73939, NewZealand: 666, UnitedStates: 170893, Argentina: 436500, Chile: 221980, Algeria: 1891005, SouthAfrica: 114087 },
    { year: 1936, France: 4370000, Italy: 3411005, Portugal: 370890, Spain: 1543000, Germany: 331539, Australia: 80591, NewZealand: 701, UnitedStates: 280818, Argentina: 581200, Chile: 292383, Algeria: 1152683, SouthAfrica: 142700 },
    { year: 1937, France: 5430000, Italy: 3658227, Portugal: 814631, Spain: 1627800, Germany: 252202, Australia: 87950, NewZealand: 736, UnitedStates: 212427, Argentina: 794800, Chile: 285687, Algeria: 1542396, SouthAfrica: 145400 },
    { year: 1938, France: 6030000, Italy: 4177968, Portugal: 1095509, Spain: 1600000, Germany: 243800, Australia: 89493, NewZealand: 771, UnitedStates: 375746, Argentina: 926200, Chile: 278991, Algeria: 2148980, SouthAfrica: 178400 },
    { year: 1939, France: 6900000, Italy: 4254982, Portugal: 772013, Spain: 2015089, Germany: 299172, Australia: 64817, NewZealand: 806, UnitedStates: 690000, Argentina: 663100, Chile: 272295, Algeria: 1787661, SouthAfrica: 181800 },
    { year: 1940, France: 4940000, Italy: 3049435, Portugal: 518865, Spain: 1416815, Germany: 108569, Australia: 64131, NewZealand: 841, UnitedStates: 540000, Argentina: 670700, Chile: 265600, Algeria: 1403399, SouthAfrica: 186722 },
    { year: 1941, France: 4760000, Italy: 3667123, Portugal: 737673, Spain: 1694400, Germany: 243852, Australia: 70406, NewZealand: 1000, UnitedStates: 849730, Argentina: 761500, Chile: 264581, Algeria: 1060339, SouthAfrica: 191644 },
    { year: 1942, France: 3500000, Italy: 3798688, Portugal: 829921, Spain: 2035000, Germany: 100343, Australia: 70872, NewZealand: 1120, UnitedStates: 507080, Argentina: 691600, Chile: 251909, Algeria: 1231334, SouthAfrica: 196567 },
    { year: 1943, France: 4100000, Italy: 3782983, Portugal: 1363007, Spain: 2194484, Germany: 196072, Australia: 86951, NewZealand: 1240, UnitedStates: 540750, Argentina: 1066200, Chile: 242338, Algeria: 659623, SouthAfrica: 201489 },
    { year: 1944, France: 4430000, Italy: 3327002, Portugal: 1407298, Spain: 2117954, Germany: 201618, Australia: 86875, NewZealand: 1360, UnitedStates: 627410, Argentina: 848900, Chile: 293161, Algeria: 926186, SouthAfrica: 206144 },
    { year: 1945, France: 2860000, Italy: 2929759, Portugal: 1001803, Spain: 1385172, Germany: 205000, Australia: 63169, NewZealand: 1480, UnitedStates: 838110, Argentina: 710100, Chile: 258491, Algeria: 950022, SouthAfrica: 211333 },
    { year: 1946, France: 3620000, Italy: 3375036, Portugal: 638025, Spain: 1734506, Germany: 209000, Australia: 113409, NewZealand: 1600, UnitedStates: 825853, Argentina: 894000, Chile: 254203, Algeria: 903973, SouthAfrica: 216256 },
    { year: 1947, France: 4420000, Italy: 3644598, Portugal: 964300, Spain: 2095463, Germany: 214000, Australia: 145572, NewZealand: 1720, UnitedStates: 813596, Argentina: 1034400, Chile: 261494, Algeria: 830279, SouthAfrica: 221178 },
    { year: 1948, France: 4740000, Italy: 4039285, Portugal: 772100, Spain: 1418425, Germany: 218500, Australia: 149470, NewZealand: 1840, UnitedStates: 801339, Argentina: 1162400, Chile: 326634, Algeria: 1265420, SouthAfrica: 226100 },
    { year: 1949, France: 4290000, Italy: 4103700, Portugal: 768400, Spain: 1432358, Germany: 136300, Australia: 149191, NewZealand: 1960, UnitedStates: 789083, Argentina: 1039700, Chile: 314100, Algeria: 1446730, SouthAfrica: 225100 },
    { year: 1950, France: 6510000, Italy: 4104900, Portugal: 850200, Spain: 1446909, Germany: 324400, Australia: 148539, NewZealand: 2080, UnitedStates: 776826, Argentina: 1250900, Chile: 360234, Algeria: 1429582, SouthAfrica: 245800 },
    { year: 1951, France: 5290000, Italy: 4976100, Portugal: 894800, Spain: 1607429, Germany: 311240, Australia: 118361, NewZealand: 2200, UnitedStates: 764569, Argentina: 1150300, Chile: 339490, Algeria: 1374273, SouthAfrica: 191300 },
    { year: 1952, France: 5390000, Italy: 4485400, Portugal: 562500, Spain: 1788882, Germany: 271300, Australia: 160269, NewZealand: 2320, UnitedStates: 752312, Argentina: 1079400, Chile: 220030, Algeria: 1231793, SouthAfrica: 253500 },
    { year: 1953, France: 5910000, Italy: 5254200, Portugal: 1121182, Spain: 2346547, Germany: 245600, Australia: 136484, NewZealand: 2440, UnitedStates: 740055, Argentina: 1300100, Chile: 364728, Algeria: 1828775, SouthAfrica: 255000 },
    { year: 1954, France: 6090000, Italy: 5047400, Portugal: 1163709, Spain: 1749850, Germany: 309800, Australia: 143954, NewZealand: 2560, UnitedStates: 727798, Argentina: 1068600, Chile: 352553, Algeria: 1929742, SouthAfrica: 287700 },
    { year: 1955, France: 6110000, Italy: 5844100, Portugal: 1091321, Spain: 1684707, Germany: 240500, Australia: 108942, NewZealand: 2682, UnitedStates: 715541, Argentina: 1767200, Chile: 363637, Algeria: 1439812, SouthAfrica: 323200 },
    { year: 1956, France: 5170000, Italy: 6298100, Portugal: 1037742, Spain: 2114386, Germany: 92900, Australia: 104184, NewZealand: 2500, UnitedStates: 703284, Argentina: 1342200, Chile: 395388, Algeria: 1863087, SouthAfrica: 283100 },
    { year: 1957, France: 3330000, Italy: 4283800, Portugal: 957637, Spain: 1736452, Germany: 226400, Australia: 139991, NewZealand: 2300, UnitedStates: 691028, Argentina: 861600, Chile: 357893, Algeria: 1528557, SouthAfrica: 286100 },
    { year: 1958, France: 4770000, Italy: 6799500, Portugal: 858501, Spain: 1983384, Germany: 480000, Australia: 153900, NewZealand: 2900, UnitedStates: 678771, Argentina: 1409800, Chile: 372050, Algeria: 1382674, SouthAfrica: 286000 },
    { year: 1959, France: 6030000, Italy: 6837900, Portugal: 892424, Spain: 1727795, Germany: 430300, Australia: 148088, NewZealand: 3100, UnitedStates: 666514, Argentina: 1776700, Chile: 363819, Algeria: 1860063, SouthAfrica: 318200 },
    { year: 1960, France: 6310000, Italy: 5533900, Portugal: 1145785, Spain: 2125653, Germany: 743300, Australia: 129112, NewZealand: 4200, UnitedStates: 654257, Argentina: 1582600, Chile: 368844, Algeria: 1585080, SouthAfrica: 286900 },
    { year: 1961, France: 4855000, Italy: 5248200, Portugal: 741967, Spain: 2048201, Germany: 357400, Australia: 153625, NewZealand: 4000, UnitedStates: 642000, Argentina: 1675000, Chile: 485276, Algeria: 1563194, SouthAfrica: 305000 },
    { year: 1962, France: 7497000, Italy: 6999300, Portugal: 1526807, Spain: 2450846, Germany: 392800, Australia: 189938, NewZealand: 5000, UnitedStates: 695000, Argentina: 1917000, Chile: 552927, Algeria: 1500000, SouthAfrica: 349000 },
    { year: 1963, France: 5752000, Italy: 5364000, Portugal: 1297938, Spain: 2583570, Germany: 603400, Australia: 136114, NewZealand: 6000, UnitedStates: 735000, Argentina: 2074000, Chile: 460593, Algeria: 1257520, SouthAfrica: 350000 },
    { year: 1964, France: 6243000, Italy: 6694500, Portugal: 1359453, Spain: 3417475, Germany: 718500, Australia: 171926, NewZealand: 6800, UnitedStates: 730000, Argentina: 1953000, Chile: 483710, Algeria: 1047700, SouthAfrica: 373000 },
    { year: 1965, France: 6842000, Italy: 6820600, Portugal: 1474921, Spain: 2645200, Germany: 503500, Australia: 176927, NewZealand: 8000, UnitedStates: 831000, Argentina: 1827000, Chile: 364844, Algeria: 1402600, SouthAfrica: 452000 },
    { year: 1966, France: 6225000, Italy: 6470600, Portugal: 892788, Spain: 3074900, Germany: 480900, Australia: 156112, NewZealand: 9000, UnitedStates: 734000, Argentina: 2192000, Chile: 473599, Algeria: 682229, SouthAfrica: 416000 },
    { year: 1967, France: 6203000, Italy: 7472500, Portugal: 973966, Spain: 2331000, Germany: 606900, Australia: 189721, NewZealand: 10000, UnitedStates: 780000, Argentina: 2817000, Chile: 488780, Algeria: 644607, SouthAfrica: 432000 },
    { year: 1968, France: 6646000, Italy: 6532300, Portugal: 1167374, Spain: 2313300, Germany: 604800, Australia: 202045, NewZealand: 14000, UnitedStates: 812000, Argentina: 1951000, Chile: 535987, Algeria: 995000, SouthAfrica: 492000 },
    { year: 1969, France: 5129000, Italy: 7165800, Portugal: 796080, Spain: 2461900, Germany: 594700, Australia: 236899, NewZealand: 16000, UnitedStates: 1023000, Argentina: 1792000, Chile: 402353, Algeria: 871050, SouthAfrica: 490000 },
    { year: 1970, France: 7540000, Italy: 6887000, Portugal: 1132760, Spain: 2560500, Germany: 988900, Australia: 286975, NewZealand: 19000, UnitedStates: 969000, Argentina: 1836000, Chile: 400561, Algeria: 869200, SouthAfrica: 424000 },
    { year: 1971, France: 6225000, Italy: 6421200, Portugal: 883490, Spain: 2588700, Germany: 602700, Australia: 251199, NewZealand: 21000, UnitedStates: 1370000, Argentina: 2178000, Chile: 525147, Algeria: 924700, SouthAfrica: 553000 },
    { year: 1972, France: 5947000, Italy: 6017400, Portugal: 819600, Spain: 2432500, Germany: 745600, Australia: 290240, NewZealand: 25000, UnitedStates: 1204000, Argentina: 1999000, Chile: 640177, Algeria: 575338, SouthAfrica: 535000 },
    { year: 1973, France: 8347000, Italy: 7671600, Portugal: 1108600, Spain: 4192770, Germany: 1069700, Australia: 256717, NewZealand: 34000, UnitedStates: 1581000, Argentina: 2257000, Chile: 544592, Algeria: 590984, SouthAfrica: 539000 },
    { year: 1974, France: 7643000, Italy: 7686700, Portugal: 1336800, Spain: 3785195, Germany: 680500, Australia: 294666, NewZealand: 31000, UnitedStates: 1424000, Argentina: 2718000, Chile: 466517, Algeria: 628172, SouthAfrica: 505000 },
    { year: 1975, France: 6697000, Italy: 6983400, Portugal: 877330, Spain: 3319454, Germany: 924100, Australia: 361177, NewZealand: 25000, UnitedStates: 1453000, Argentina: 2210000, Chile: 464871, Algeria: 431900, SouthAfrica: 590000 },
    { year: 1976, France: 7415000, Italy: 6570000, Portugal: 925290, Spain: 2431118, Germany: 865900, Australia: 346255, NewZealand: 30000, UnitedStates: 1437000, Argentina: 2820000, Chile: 514269, Algeria: 378273, SouthAfrica: 597000 },
    { year: 1977, France: 5302000, Italy: 6414200, Portugal: 658280, Spain: 2181967, Germany: 1038900, Australia: 372269, NewZealand: 33000, UnitedStates: 1583000, Argentina: 2332000, Chile: 578638, Algeria: 254876, SouthAfrica: 482000 },
    { year: 1978, France: 5891000, Italy: 7243900, Portugal: 636200, Spain: 2948138, Germany: 729700, Australia: 332304, NewZealand: 41000, UnitedStates: 1616000, Argentina: 2027000, Chile: 561175, Algeria: 184000, SouthAfrica: 606000 },
    { year: 1979, France: 8438000, Italy: 8514600, Portugal: 1407824, Spain: 4813517, Germany: 818100, Australia: 345392, NewZealand: 42000, UnitedStates: 1605000, Argentina: 2635000, Chile: 540021, Algeria: 270976, SouthAfrica: 630000 },
    { year: 1980, France: 6971000, Italy: 8654500, Portugal: 1003546, Spain: 4240200, Germany: 463500, Australia: 404893, NewZealand: 47000, UnitedStates: 1800000, Argentina: 2349000, Chile: 586000, Algeria: 283751, SouthAfrica: 707000 },
    { year: 1981, France: 5770000, Italy: 7056000, Portugal: 882171, Spain: 3366700, Germany: 715900, Australia: 366413, NewZealand: 44000, UnitedStates: 1630000, Argentina: 2180000, Chile: 594300, Algeria: 266888, SouthAfrica: 773000 },
    { year: 1982, France: 7995000, Italy: 7264800, Portugal: 1003097, Spain: 3743300, Germany: 1540300, Australia: 394738, NewZealand: 47000, UnitedStates: 1950000, Argentina: 2518000, Chile: 610000, Algeria: 151400, SouthAfrica: 895000 },
    { year: 1983, France: 6880000, Italy: 8328000, Portugal: 825214, Spain: 3091300, Germany: 1304100, Australia: 334557, NewZealand: 58000, UnitedStates: 1476000, Argentina: 2472000, Chile: 520000, Algeria: 187567, SouthAfrica: 917000 },
    { year: 1984, France: 6415000, Italy: 7090000, Portugal: 839290, Spain: 3395724, Germany: 799300, Australia: 393675, NewZealand: 42000, UnitedStates: 1666000, Argentina: 1881000, Chile: 450000, Algeria: 139380, SouthAfrica: 908000 },
    { year: 1985, France: 7029000, Italy: 6300000, Portugal: 956730, Spain: 3238200, Germany: 540200, Australia: 444572, NewZealand: 60000, UnitedStates: 1720000, Argentina: 1574000, Chile: 319650, Algeria: 93810, SouthAfrica: 831000 },
    { year: 1986, France: 7422000, Italy: 7709300, Portugal: 761540, Spain: 3508224, Germany: 1006200, Australia: 383082, NewZealand: 42000, UnitedStates: 1927000, Argentina: 1857000, Chile: 300382, Algeria: 90630, SouthAfrica: 767000 },
    { year: 1987, France: 6944000, Italy: 7587400, Portugal: 1074176, Spain: 3997633, Germany: 894200, Australia: 366541, NewZealand: 38000, UnitedStates: 1904000, Argentina: 2602000, Chile: 286364, Algeria: 91780, SouthAfrica: 880000 },
    { year: 1988, France: 5746000, Italy: 6101000, Portugal: 360291, Spain: 2212887, Germany: 931500, Australia: 403325, NewZealand: 39000, UnitedStates: 2011000, Argentina: 2063000, Chile: 335039, Algeria: 62100, SouthAfrica: 916000 },
    { year: 1989, France: 6048000, Italy: 6065100, Portugal: 743697, Spain: 3113000, Germany: 1322600, Australia: 494235, NewZealand: 46000, UnitedStates: 1761000, Argentina: 2032000, Chile: 329789, Algeria: 50373, SouthAfrica: 968000 },
    { year: 1990, France: 6552900, Italy: 5486600, Portugal: 1076761, Spain: 3969200, Germany: 851400, Australia: 439264, NewZealand: 54500, UnitedStates: 1585200, Argentina: 1403600, Chile: 327588, Algeria: 48500, SouthAfrica: 852000 },
    { year: 1991, France: 4268900, Italy: 5978800, Portugal: 947124, Spain: 3139000, Germany: 1017000, Australia: 394289, NewZealand: 50000, UnitedStates: 1514000, Argentina: 1450000, Chile: 237404, Algeria: 46000, SouthAfrica: 857400 },
    { year: 1992, France: 6540100, Italy: 6868600, Portugal: 719803, Spain: 3383155, Germany: 1334900, Australia: 475586, NewZealand: 41600, UnitedStates: 1654000, Argentina: 1435000, Chile: 212757, Algeria: 40957, SouthAfrica: 883900 },
    { year: 1993, France: 5328500, Italy: 6267200, Portugal: 445183, Spain: 2640466, Germany: 982200, Australia: 457799, NewZealand: 32500, UnitedStates: 1585000, Argentina: 1447000, Chile: 223981, Algeria: 65000, SouthAfrica: 811100 },
    { year: 1994, France: 5464000, Italy: 5929000, Portugal: 626652, Spain: 2078330, Germany: 1030300, Australia: 587377, NewZealand: 41000, UnitedStates: 1755000, Argentina: 1817300, Chile: 276648, Algeria: 50000, SouthAfrica: 804400 },
    { year: 1995, France: 5435400, Italy: 6267200, Portugal: 777636, Spain: 2103960, Germany: 827800, Australia: 502796, NewZealand: 56400, UnitedStates: 1866800, Argentina: 1644300, Chile: 290904, Algeria: 57100, SouthAfrica: 844600 },
    { year: 1996, France: 5704700, Italy: 5854300, Portugal: 928619, Spain: 3040120, Germany: 839000, Australia: 673445, NewZealand: 57300, UnitedStates: 1887700, Argentina: 1268100, Chile: 337273, Algeria: 39200, SouthAfrica: 1012612 },
    { year: 1997, France: 5356100, Italy: 5056300, Portugal: 562988, Spain: 3321780, Germany: 831100, Australia: 618037, NewZealand: 45800, UnitedStates: 2200000, Argentina: 1350000, Chile: 381667, Algeria: 35700, SouthAfrica: 880915 },
    { year: 1998, France: 5267100, Italy: 5689600, Portugal: 444144, Spain: 3022430, Germany: 1062000, Australia: 741774, NewZealand: 60600, UnitedStates: 2050400, Argentina: 1267300, Chile: 444007, Algeria: 36000, SouthAfrica: 815600 },
    { year: 1999, France: 6043500, Italy: 5568700, Portugal: 753619, Spain: 3338770, Germany: 1212300, Australia: 851413, NewZealand: 60200, UnitedStates: 1905000, Argentina: 1588770, Chile: 371428, Algeria: 42156, SouthAfrica: 914100 },
    { year: 2000, France: 5754100, Italy: 5408800, Portugal: 637769, Spain: 4117394, Germany: 985200, Australia: 859502, NewZealand: 60200, UnitedStates: 2333000, Argentina: 1253700, Chile: 570431, Algeria: 42362, SouthAfrica: 837210 },
    { year: 2001, France: 5338800, Italy: 5229300, Portugal: 742579, Spain: 3095067, Germany: 889100, Australia: 1076537, NewZealand: 53300, UnitedStates: 2219000, Argentina: 1583500, Chile: 504369, Algeria: 42000, SouthAfrica: 746485 },
    { year: 2002, France: 5000000, Italy: 4460400, Portugal: 638330, Spain: 3453960, Germany: 988500, Australia: 1220373, NewZealand: 89000, UnitedStates: 2088000, Argentina: 1269500, Chile: 526496, Algeria: 50000, SouthAfrica: 834156 },
    { year: 2003, France: 4749060, Italy: 4408600, Portugal: 709947, Spain: 4246240, Germany: 811000, Australia: 1085985, NewZealand: 55000, UnitedStates: 2225000, Argentina: 1322500, Chile: 640848, Algeria: 60000, SouthAfrica: 956015 },
    { year: 2004, France: 5910694, Italy: 5313500, Portugal: 720160, Spain: 4280433, Germany: 1014700, Australia: 1471227, NewZealand: 119200, UnitedStates: 2305000, Argentina: 1564000, Chile: 605206, Algeria: 85000, SouthAfrica: 1015697 },
    { year: 2005, France: 5210500, Italy: 5056600, Portugal: 701981, Spain: 3643687, Germany: 910400, Australia: 1433826, NewZealand: 102000, UnitedStates: 2710000, Argentina: 1522000, Chile: 735991, Algeria: 90000, SouthAfrica: 905227 },
    { year: 2006, France: 5212700, Italy: 4963300, Portugal: 727386, Spain: 3890731, Germany: 906300, Australia: 1429789, NewZealand: 133200, UnitedStates: 2358000, Argentina: 1540000, Chile: 802441, Algeria: 105000, SouthAfrica: 1012980 },
    { year: 2007, France: 4711600, Italy: 4251400, Portugal: 581562, Spain: 3520871, Germany: 1036500, Australia: 961972, NewZealand: 147600, UnitedStates: 2414000, Argentina: 1504600, Chile: 791794, Algeria: 52000, SouthAfrica: 1043500 },
    { year: 2008, France: 4198632, Italy: 4624500, Portugal: 542755, Spain: 3736689, Germany: 1000100, Australia: 1244778, NewZealand: 205200, UnitedStates: 2346000, Argentina: 1467764, Chile: 824642, Algeria: 69816, SouthAfrica: 1089000 },
    { year: 2009, France: 4552077, Italy: 4542200, Portugal: 571071, Spain: 3548929, Germany: 913900, Australia: 1179191, NewZealand: 205200, UnitedStates: 2677000, Argentina: 1213547, Chile: 981772, Algeria: 58840, SouthAfrica: 1033400 },
    { year: 2010, France: 4531671, Italy: 4673700, Portugal: 690919, Spain: 3535347, Germany: 690600, Australia: 1151656, NewZealand: 190000, UnitedStates: 2650000, Argentina: 1625077, Chile: 840891, Algeria: 47500, SouthAfrica: 984800 },
    { year: 2011, France: 5106761, Italy: 4270500, Portugal: 542093, Spain: 3370912, Germany: 913200, Australia: 1125986, NewZealand: 235000, UnitedStates: 2692400, Argentina: 1547300, Chile: 946640, Algeria: 48000, SouthAfrica: 1012800 },
    { year: 2012, France: 4209724, Italy: 4107370, Portugal: 611462, Spain: 3112256, Germany: 901200, Australia: 1236145, NewZealand: 194000, UnitedStates: 2981100, Argentina: 1166025, Chile: 1187672, Algeria: 49200, SouthAfrica: 1095100 },
    { year: 2013, France: 4293466, Italy: 4796590, Portugal: 603970, Spain: 4607855, Germany: 840900, Australia: 1245602, NewZealand: 248400, UnitedStates: 3114600, Argentina: 1498400, Chile: 1210742, Algeria: 49800, SouthAfrica: 1156900 },
    { year: 2014, France: 4650000, Italy: 4208750, Portugal: 603327, Spain: 3950000, Germany: 920200, Australia: 1186343, NewZealand: 320400, UnitedStates: 3021400, Argentina: 1517900, Chile: 1214000, Algeria: 52000, SouthAfrica: 1146000 },
    { year: 2015, France: 4700000, Italy: 4950000, Portugal: 700000, Spain: 3770000, Germany: 887281, Australia: 1191193, NewZealand: 234700, UnitedStates: 3080000, Argentina: 1335800, Chile: 1233562, Algeria: 52000, SouthAfrica: 1123100 },
    { year: 2016, France: 4540000, Italy: 4570000, Portugal: 600000, Spain: 4000000, Germany: 900000, Australia: 1310000, NewZealand: 313900, UnitedStates: 3150000, Argentina: 940000, Chile: 1010000, Algeria: 52000, SouthAfrica: 1053100 },
    { year: 2017, France: 3640000, Italy: 4250000, Portugal: 670000, Spain: 3250000, Germany: 750000, Australia: 1370000, NewZealand: 290000, UnitedStates: 2330000, Argentina: 1180000, Chile: 950000, Algeria: 52000, SouthAfrica: 1050000 },
    { year: 2018, France: 4920000, Italy: 5490000, Portugal: 610000, Spain: 4490000, Germany: 1030000, Australia: 1290000, NewZealand: 300000, UnitedStates: 2480000, Argentina: 1450000, Chile: 1290000, Algeria: 52000, SouthAfrica: 950000 },
    { year: 2019, France: 4210000, Italy: 3370000, Portugal: 650000, Spain: 3430000, Germany: 820000, Australia: 1250000, NewZealand: 300000, UnitedStates: 2430000, Argentina: 1300000, Chile: 1190000, Algeria: 52000, SouthAfrica: 970000 },
];

const StackedAreaChart = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = 800;
    const height = 300;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.sum(Object.values(d).slice(1)))])
      .range([height - margin.top - margin.bottom, 0]);


    const stack = d3.stack().keys(["France", "Italy", "Portugal","Spain", "Germany", "Australia", "NewZealand", "UnitedStates","Argentina", "Chile", "Algeria", "SouthAfrica" ])(data);

    const area = d3
      .area()
      .x((d) => xScale(d.data.year))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));

    //   const colors = d3.scaleOrdinal(d3.schemeYlOrRd[9]);
      const colors = d3.scaleOrdinal(d3.schemeRdYlBu[9]);

    // const colors = d3
    //   .scaleOrdinal()
    //   .domain(["France", "Italy", "Portugal","Spain", "Germany", "Australia", "NewZealand", "UnitedStates"])
    //   .range(["#1f77b4", "#ff7f0e", "#2ca02c","#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f"]);

    svg
      .selectAll("path")
      .data(stack)
      .enter()
      .append("path")
      .attr("fill", (d) => colors(d.key))
      .attr("d", area)
    //   .on("mouseover", (event, d) => {
    //     const country = d.key;
    //     const values = d.data[country];
    //     const year = d3.timeFormat("%Y")(d.data.year);
    //     tooltipRef.current.innerHTML = `${country}: ${values} (${year})`;
    //     tooltipRef.current.style.display = "block";
    //     tooltipRef.current.style.left = `${event.pageX}px`;
    //     tooltipRef.current.style.top = `${event.pageY}px`;
    //   })
    //   .on("mouseout", () => {
    //     tooltipRef.current.style.display = "none";
    //   });
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    svg.append("g").call(yAxis);

    svg
      .append("text")
      .attr(
        "transform",
        `translate(${width / 2},${height - margin.bottom / 2})`
      )
      .style("text-anchor", "middle")
      .text("Year");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Production (thousand liters)");

    d3.select(window).on("resize", () => {
      const containerWidth = svgRef.current.getBoundingClientRect().width;
      const containerHeight = svgRef.current.getBoundingClientRect().height;
      svg.attr("width", containerWidth).attr("height", containerHeight);
      xScale.range([0, containerWidth - margin.left - margin.right]);
      yScale.range([containerHeight - margin.top - margin.bottom, 0]);
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);
      svg.selectAll("path").attr("d", area);
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg ref={svgRef}></svg>
      <div
        ref={tooltipRef}
        style={{
          display: "none",
          position: "absolute",
          padding: "10px",
          background: "white",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      ></div>
    </div>
  );
};

export default StackedAreaChart;
