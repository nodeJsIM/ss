## 实现设计

### 表名

#### 客服表

```sql
CREATE TABLE seat
(
    id serial primary key,
    qunar_name       VARCHAR(40),
    web_name         VARCHAR(40),
    nickname         VARCHAR(50),
    face_link        VARCHAR(150),
    supplier_id      INTEGER,
    priority         DOUBLE PRECISION,
    create_time      TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    last_update_time TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    service_status   SMALLINT    DEFAULT 0,
    status           SMALLINT    DEFAULT 1,
    max_user         SMALLINT    DEFAULT 10,
    host             VARCHAR(20) DEFAULT 'qtalk.openresty.org' :: CHARACTER VARYING
);

```

#### Session

```sql
CREATE TABLE session
(
  id serial primary key,
  session_id    VARCHAR(255)                              NOT NULL,
  user_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  seat_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  shop_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  customer_name    VARCHAR(150) DEFAULT '' :: CHARACTER VARYING                           NOT NULL,
  shop_id          INTEGER DEFAULT 0                                                      NOT NULL,
  product_id    TEXT,
  session_state SMALLINT     DEFAULT 0,
  isrobot_seat  SMALLINT     DEFAULT 0,
  created_time  TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  update_time   TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL
);
```

#### supplier

```sql
CREATE TABLE supplier
(
  id serial primary key,
  name                VARCHAR(100),
  create_time         TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  last_update_time    TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  logo_url            VARCHAR(255),
  welcomes            VARCHAR(512),
  status              INTEGER  DEFAULT 1,
  no_service_welcomes VARCHAR  DEFAULT '' :: CHARACTER VARYING
);
```