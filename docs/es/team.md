---
editLink: false
---

<!-- markdownlint-disable -->
<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = {
  developers: [
    {
      avatar: "https://www.github.com/LonelyDeathVGX.png",
      links: [
        {
          icon: "github",
          link: "https://github.com/LonelyDeathVGX",
        },
      ],
      name: "LonelyDeathVGX",
      title: "Creador y Desarrollador Principal",
    },
  ],
};
</script>
<!-- markdownlint-restore -->

# Nuestro Equipo

¡Gracias a todas estas personas que han hecho posible FancyScript!

## Desarrolladores

<!-- markdownlint-disable -->
<VPTeamMembers size="small" :members="members.developers" />
<!-- markdownlint-restore -->
