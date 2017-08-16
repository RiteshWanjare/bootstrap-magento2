# Bootstrap Magento

### Git

Firstly, clone our repo down to a folder:

```bash
git clone https://github.com/RiteshWanjare/bootstrap-magento2.git
```

### If you face below error then Run below command
Fatal error: Allowed memory size of 134217728 bytes exhausted (tried to allocate 12544341 bytes) in \xampp\htdocs\project\vendor\magento\framework\View\Asset\Bundle.php

```bash
php -dmemory_limit=6G bin/magento setup:static-content:deploy
```
