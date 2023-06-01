---
title: 'First Post'
description: 'meta description of the page'
createdAt: '2023-10-10'
---
this is the first post

ajkdskajdkashdjkashdkjahdslk

```js [file.js]{4-6,7} meta-info=val
function factorial(n) {
  if (n === 0 || n === 1)
    return 1

  else
    return n * factorial(n - 1)

}

const num = 5
const result = factorial(num)

console.log(`The factorial of ${num} is ${result}`)
```
test
```js
const num = 5
const result = factorial(num)

console.log(`The factorial of ${num} is ${result}`)
```

I have not been actively updating this website for quite some time. Currently most of my free time is spent studying after work (which is very busy at the moment).
However there have been a lot of changes in my homelab. My old homelab consisted of multiple servers/pc's that I scrambled together and just tinkered with. This year I decided to clean up my homelab and create something that makes it easier for me to expand and learn new stuff.

I followed these steps:
Seperate my network (seperate networks/vlans)
Buy and build a new server running proxmox

Migrate the old servers to vms
Set up better security
Set up better monitoring
Document the setup/experience
I am planning to create multiple posts here showcasing my new and improved setup and how I got there.
Sneak peek of the coming posts:
Epyc 7551 32 Core processor, 256GB RAM 6x18TB HDD

# Proxmox
## Test