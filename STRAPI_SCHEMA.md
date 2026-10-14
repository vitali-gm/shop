# Collection types

## Product

- title (Text, required)
- slug (UID from title, required)
- sku (Text, required)
- price (Integer/Decimal, required)
- color (Text)
- brand (Text)
- season (Enumeration: demi-season, summer, winter, all-season)
- purpose (Text)
- description (Rich text)
- material_upper (Text)
- material_lining (Text)
- material_sole (Text)
- is_featured (Boolean)
- category (Relation: many products belong to one category)
- sizes (Relation: many-to-many with size)
- gallery (Media: multiple images)

## Category

- name (Text, required)
- slug (UID from name, required)
- description (Text)

## Size

- value (Integer/Text, required)
- sort_order (Integer)

## Feedback

- name (Text, required)
- phone (Text, required)
- message (Text/Long text)
- product (Relation: many feedback entries belong to one product)

## Homepage

- hero_title (Text)
- hero_subtitle (Text)
- hero_button_primary (Text)
- hero_button_secondary (Text)
- about_title (Text)
- about_text (Rich text)
- contact_title (Text)
- contact_text (Rich text)
